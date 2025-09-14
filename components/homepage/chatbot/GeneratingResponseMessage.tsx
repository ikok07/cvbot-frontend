import {Loader} from "@/components/ui/shadcn-io/ai/loader";

export default function GeneratingResponseMessage() {
    return <div className="flex items-center gap-2 animate-in slide-in-from-left-2 fade-in duration-200">
        <Loader />
        <p className="text-sm animate-pulse">
            Generating response...
        </p>
    </div>
}