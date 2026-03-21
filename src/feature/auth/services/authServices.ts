import { api } from "@/app/axiosInstance";
import type { googleProfile, LoginPayload } from "../types/loginTypes";
import type {CredentialResponse} from "@react-oauth/google"
import {jwtDecode} from "jwt-decode"

export const loginService = async (payload : LoginPayload)=>{
    return await api.post("endpoint here..." , payload)
}

export const googleLoging = (gUser : CredentialResponse)=>{
    if(gUser.credential){
        const decoded = jwtDecode<googleProfile>(gUser.credential);
        console.log(decoded)
    }   
}