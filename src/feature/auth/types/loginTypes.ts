export type LoginResponse = {
  id: number;
  name: string;
  lastName: string;
  email: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginStoreType = {
  email: string;
  password: string;
  isAuthenticated: boolean;
  validateUserLoginState: () => void;
  doLogin: (payload: LoginPayload) => void;
};
