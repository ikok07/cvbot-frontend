export type ServerActionResult<T> =
    | {success: true, value: T}
    | {success: false, error: ServerActionErrorType}

export type ServerActionErrorOptions = {
    id?: string,
    message: string
}

export type ServerActionErrorType = {
    id: string,
    message: string
}

export class ServerActionError extends Error {
    public id: string

    constructor(message: string);
    constructor({id, message}: ServerActionErrorOptions);

    constructor(arg: string | ServerActionErrorOptions) {
        if (typeof arg === "string") {
            super(arg);
            this.id = "generic_error";
        } else {
            super(arg.message);
            this.id = arg.id ?? "generic_error";
            this.name = "ServerActionError"
        }
    }
}

export function serverActionErrorToObject(error: ServerActionError): ServerActionErrorType {
    return {
        id: error.id,
        message: error.message
    }
}

export function createServerAction<Return, Args extends unknown[] = []>(callback: (...args: Args) => Promise<Return>): (...args: Args) => Promise<ServerActionResult<Return>> {
    return async (...args: Args) => {
        try {
            const value = await callback(...args);
            return {success: true, value}
        } catch (error) {
            if (error instanceof ServerActionError) {
                return {success: false, error: serverActionErrorToObject(error)}
            }
            throw error;
        }
    }
}