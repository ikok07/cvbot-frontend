import {
    createContext,
    Dispatch,
    FormEvent,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";
import {HistoryMessage} from "@/models/actions/fetch-history";
import {useLocalStorage} from "@/hooks/use-local-storage";
import useErrorQuery from "@/hooks/useErrorQuery";
import {fetchHistory} from "@/app/actions";
import {v4 as uuidv4} from "uuid";
import { useQueryClient } from "@tanstack/react-query";
import {fetchEventSource} from "@microsoft/fetch-event-source";
import {messageChunkSchema} from "@/models/message-chunk";
import {toast} from "sonner";

export type ChatbotState = {
    prompt: string,
    setPrompt: Dispatch<SetStateAction<string>>,
    isLoading: boolean,
    isRefetching: boolean,
    isSuccess: boolean,
    historyMessages: HistoryMessage[],
    setHistoryMessages: Dispatch<SetStateAction<HistoryMessage[]>>,
    isReceivingMessageChunks: boolean,
    setIsReceivingMessageChunks: Dispatch<SetStateAction<boolean>>,
    initialChunkReceived: boolean,
    setInitialChunkReceived: Dispatch<SetStateAction<boolean>>,
    handleResetChat: () => void,
    handlePromptSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const Context = createContext<ChatbotState | null>(null)

type ChatbotProviderProps = {
    children: ReactNode
}

export default function ChatbotProvider({children}: ChatbotProviderProps) {
    const queryClient = useQueryClient();
    const [prompt, setPrompt] = useState("");
    const [historyMessages, setHistoryMessages] = useState<HistoryMessage[]>([])

    const [isReceivingMessageChunks, setIsReceivingMessageChunks] = useState(false);
    const [initialChunkReceived, setInitialChunkReceived] = useState(false);

    const [sessionId, setSessionId] = useLocalStorage<string | null>("chatbot-session", null)

    const {data, isLoading, isRefetching, isSuccess} = useErrorQuery({
        queryFn: () => fetchHistory(sessionId!),
        queryKey: ["chatbot-history"],
        enabled: !!sessionId
    });

    const messageHistory = useMemo(() => {
        if (!data?.success) return []
        return data.value.data;
    }, [isLoading, isSuccess]);

    function handleResetChat() {
        setHistoryMessages([]);
        setSessionId(uuidv4());
        queryClient.invalidateQueries({queryKey: ["chatbot-history"]})
    }

    function handlePromptSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setHistoryMessages(v => [...v, {role: "user", content: prompt}])
        setPrompt("")
        setIsReceivingMessageChunks(true);
        async function fetchData() {
            await fetchEventSource(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/chatbot/invoke`, {
                method: "POST",
                body: JSON.stringify({message: prompt, session_id: sessionId}),
                headers: {
                    "Content-Type": "application/json"
                },
                onopen: async () => {
                    setHistoryMessages(v => [...v, {role: "assistant", content: ""}])
                    return
                },
                onmessage: (ev) => {
                    const {data, error} = messageChunkSchema.safeParse(JSON.parse(ev.data));
                    if (error) throw new Error(`Invalid message chunk! ${ev.data}`);
                    if (data.type === "error") throw new Error(data.content);

                    if (!initialChunkReceived) setInitialChunkReceived(true);


                    if (data.type === "sources") {
                        if (!historyMessages[historyMessages.length - 1]?.sources) setHistoryMessages(v => [...v.slice(0, -1), {...v[v.length - 1], sources: []}]);
                        setHistoryMessages(v => [...v.slice(0, -1), {...v[v.length - 1], sources: v[v.length - 1].sources!.concat(data.content)}])
                        return
                    }

                    setHistoryMessages(v => [...v.slice(0, -1), {...v[v.length - 1], content: v[v.length - 1].content + data.content}])
                },
                onclose: () => {
                    setIsReceivingMessageChunks(false);
                    setInitialChunkReceived(false);
                },
                onerror: (err) => {
                    console.log(err);
                    setIsReceivingMessageChunks(false);
                    setInitialChunkReceived(false);
                    setHistoryMessages(v => v.slice(0, -1))
                    if (err instanceof Error) {
                        toast.error(err.message)
                    }
                    throw err
                },
            })
        }
        fetchData()
    }

    useEffect(() => {
        if (!sessionId) setSessionId(uuidv4());
    }, [sessionId]);

    useEffect(() => {
        setHistoryMessages(messageHistory)
    }, [isLoading, isRefetching]);

    return <Context.Provider value={{
        isLoading,
        isRefetching,
        isSuccess,
        prompt,
        setPrompt,
        historyMessages,
        setHistoryMessages,
        isReceivingMessageChunks,
        setIsReceivingMessageChunks,
        initialChunkReceived,
        setInitialChunkReceived,
        handleResetChat,
        handlePromptSubmit
    }}>
        {children}
    </Context.Provider>
}

export function useChatbot() {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useChatbot() must be used inside ChatbotProvider!")
    }
    return context;
}