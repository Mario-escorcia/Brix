import { ButtonComponet } from "@/shared/components/common/ButtonComponet";
import { InputComponent } from "@/shared/components/common/InputComponent";
import { GoUnlock } from "react-icons/go";
import { googleLoging } from "../services/authServices";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
const CLIENT_ID = import.meta.env.VITE_client_id_OAuth;
export const Login = () => {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <section className="h-screen w-full bg-(--white) flex justify-between items-center absolute">
        <div className="h-250 w-250 opacity-50 bg-(--primary-color) rounded-full rotate-45 relative -left-100 -top-100 blur-3xl"></div>
        <form className="h-full w-[50%] flex items-center flex-col justify-center gap-(--gap)">
          <h2>Sign in</h2>
          <p>Enter your email and password to sign in.</p>
          <div className="w-60">
            <InputComponent label="Email"></InputComponent>
          </div>
          <div className="w-60">
            <InputComponent label="Password"></InputComponent>
          </div>
          <div className="w-60">
            <ButtonComponet
              label="Sign in"
              onClick={() => {}}
              className="bg-(--black) text-(--white)"
              icon={<GoUnlock fontSize={"var(--icon-size)"}></GoUnlock>}
            />
          </div>
          <p className="text-(--info-size)!">Or login with Google</p>
          <div className="w-60"><GoogleLogin size="large" onSuccess={googleLoging}></GoogleLogin></div>
          
        </form>
      </section>
    </GoogleOAuthProvider>
  );
};
