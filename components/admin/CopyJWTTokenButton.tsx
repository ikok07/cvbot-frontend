"use client"

import {useAuth} from "@clerk/nextjs";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import {toast} from "sonner";

export default function CopyJwtTokenButton() {
    const {getToken} = useAuth();

    function handleClick() {
        async function task() {
            try {
                const token = await getToken({template: "cvbot-frontend"});
                if (!token) {
                    toast.error("Failed to get JWT token!");
                    return;
                }

                await navigator.clipboard.writeText(token);
                toast.success("JWT Token copied successfully ")
            } catch (e) {
                console.log(e);
                toast.error("Failed to get JWT token!");
            }
        }
        task()
    }

    return <PrimaryButton onClick={handleClick} className="mt-5">Copy JWT Token</PrimaryButton>
}