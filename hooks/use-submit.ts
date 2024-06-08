import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ApiResponse {
    payload: object | [] | null
    message: string
}

interface UseSubmitOptions {
    loadingMessage?: string;
    errorMessage?: string;
    successMessage?: string;
}

interface AdditionalProps {
    origin?: string;
    redirectTo?: string;
}

export interface useSubmitProps {
    callback: (data: any) => Promise<ApiResponse>;
    options?: UseSubmitOptions;
    additionalProps?: AdditionalProps;
}

const useSubmit = <FormProps extends Record<string, any>>(
    callback: (data: FormProps) => Promise<ApiResponse>,
    options?: UseSubmitOptions,
    additionalProps?: AdditionalProps
) => {
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (data: FormProps) => {
        try {
            setLoading(true);

            const { payload, message } = await callback(data);

            if (payload || message) {
                if (message) {
                    toast({
                        title: message
                    })
                }
                else if (options?.successMessage) {
                    toast({
                        title: options.successMessage
                    })
                }
                if (additionalProps?.origin) {
                    window.location.assign(additionalProps.origin);
                } else if (additionalProps?.redirectTo) {
                    router.refresh();
                    router.push(additionalProps.redirectTo);
                } else {
                    router.refresh();
                }
            }
            else {
                if (options?.errorMessage) {
                    toast({
                        title: options.errorMessage,
                        variant: "destructive"
                    });
                }
            }

        } catch (error: any) {
            if (options?.errorMessage) {
                toast({ title: error.response.data, variant: "destructive" });
            }
        } finally {
            setLoading(false);
        }
    };

    return { loading, handleSubmit };
};

export default useSubmit;
