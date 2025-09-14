import { ServerActionErrorType, ServerActionResult } from "@/utils/createServerAction";
import {useMutation, UseMutationOptions} from "@tanstack/react-query";
import {useEffect} from "react";

export default function useErrorMutation<TData = unknown, TVariables = void, TContext = unknown>(options: UseMutationOptions<ServerActionResult<TData>, ServerActionErrorType, TVariables, TContext>) {
    const result =  useMutation(options)

    useEffect(() => {
        if (result.isSuccess && !result.data.success) {
            throw result.data.error;
        }
    }, [result.isSuccess]);

    return result;
}