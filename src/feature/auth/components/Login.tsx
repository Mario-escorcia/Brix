import { InputComponent } from "@/shared/components/common/InputComponent";

export const Login = () => {
  return (
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
      </form>
    </section>
  );
};
