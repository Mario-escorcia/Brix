import { api } from "@/app/axiosInstance";
import type { LoginPayload } from "../types/loginTypes";

export const loginService = async (payload : LoginPayload)=>{
    return await api.post("endpoint here..." , payload)
}