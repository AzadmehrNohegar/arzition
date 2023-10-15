import { useState } from "react";
import { AuthLoginFlow } from "./partials/login";
import { AuthSignupFlow } from "./partials/signup";

function Auth() {
  const [flow, setFlow] = useState<"login" | "signup">("login");

  return (
    <div className="h-screen flex flex-col">
      <img
        src="/images/peer-logo.svg"
        alt="peer logo"
        className="mx-auto py-4 block sm:hidden"
      />
      <div className="flex h-full justify-between sm:justify-normal flex-col sm:flex-row-reverse items-center w-full sm:h-screen">
        <div className="w-full sm:w-7/12 px-10 py-4 sm:p-20">
          <img
            src="/images/login-bg.png"
            className="w-full"
            alt="login background"
          />
        </div>
        {flow === "login" ? (
          <AuthLoginFlow changeFlow={() => setFlow("signup")} />
        ) : null}
        {flow === "signup" ? (
          <AuthSignupFlow changeFlow={() => setFlow("login")} />
        ) : null}
      </div>
    </div>
  );
}

export default Auth;
