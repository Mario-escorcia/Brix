import { create } from "zustand";
import type { LoginStoreType } from "../types/loginTypes";
import { loginService } from "../services/authServices";

export const useLoginStore = create<LoginStoreType>((set, get) => ({
  email: "",
  isAuthenticated: false,
  password: "",
  doLogin(payload) {
    set({
      email: payload.email,
      password: payload.password,
    });

    const { email, password } = get();
    if (email && password) {
      loginService({ email, password });
    }
  },
  validateUserLoginState() {
    // validate if user is already logged to redirect to home or not
  },
}));
