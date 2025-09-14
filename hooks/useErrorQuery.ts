import {ServerActionErrorType, ServerActionResult } from "@/utils/createServerAction";
import {QueryKey, useQuery, UseQueryOptions} from "@tanstack/react-query";
import {useEffect} from "react";

export default function useErrorQuery<TQueryFnData = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: UseQueryOptions<ServerActionResult<TQueryFnData>, ServerActionErrorType, ServerActionResult<TData>, TQueryKey>) {
    const result = useQuery(options);

    useEffect(() => {
        if (result.isSuccess && !result.data.success) {
            throw result.data.error;
        }
    }, [result.isSuccess]);

    return result;
}

