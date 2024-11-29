import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "../../services";

interface SendEmailParams {
    from: string
    to: string
    subject: string
    html: string
    text: string
}

export async function sendEmail(bodyParamsSendEmail: SendEmailParams): Promise<void>{
    const { data } = await api.post<void>("/send-email", bodyParamsSendEmail)
    return data
}

export function useSendEmail(){
    return useMutation<void, AxiosError, SendEmailParams>({
        mutationFn: sendEmail
    }) 
}