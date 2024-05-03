export interface ApiResponse {
    payload: object | [] | null
    message: string
}

export interface UseSubmitOptions {
    loadingMessage: string;
    errorMessage: string;
    successMessage: string;
}

export interface AdditionalProps {
    origin?: string;
    redirectTo?: string;
}
