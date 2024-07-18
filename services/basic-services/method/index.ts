import { sendRequest } from "../request";
import type { SendRequestPayload } from "../request";

export type Payload = Omit<SendRequestPayload,'method'>;

export type GetPayload = Omit<Payload,"data">;

export const Get = async (payload:Payload)=>{
    return sendRequest({...payload,method:"GET"});
}

export const Post = async (payload:Payload)=>{
    return sendRequest({...payload,method:"POST"});
}

export const Put = async (payload:Payload)=>{
    return sendRequest({...payload,method:'PUT'});
}

export const Patch = async (payload:Payload)=>{
    return sendRequest({...payload,method:'PATCH'});
}

export const Delete = async (payload:Payload)=>{
    return sendRequest({...payload,method:'DELETE'});
}





