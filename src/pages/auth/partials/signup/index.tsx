import { useState } from "react";
import { AuthSignupCredentialsStep } from "./partials/credentials";
import { AuthSignupVerificationStep } from "./partials/verification";

interface IAuthSignupFlowProps {
  changeFlow: () => void;
}

function AuthSignupFlow({ changeFlow }: IAuthSignupFlowProps) {
  const [step, setStep] = useState<"credentials" | "verification">(
    "credentials"
  );
  const [persistedPhone, setPersistedPhone] = useState("");

  return (
    <div className="w-full sm:w-5/12 ps-8 pe-6 flex flex-col items-start justify-center gap-y-0 sm:gap-y-4">
      <img
        src="/images/peer-logo.svg"
        alt="peer logo"
        className="mx-auto my-4 hidden sm:block"
      />
      {step === "credentials" ? (
        <AuthSignupCredentialsStep
          changeStep={() => setStep("verification")}
          persistPhone={(val: string) => setPersistedPhone(val)}
        />
      ) : null}
      {step === "verification" ? (
        <AuthSignupVerificationStep
          changeStep={() => {
            setPersistedPhone("");
            setStep("credentials");
          }}
          persistedPhone={persistedPhone}
        />
      ) : null}
      {step === "credentials" ? (
        <div className="mx-auto flex items-center gap-x-10 pb-4">
          <span className="text-grey-600 text-[13px]">حساب کاربری دارم</span>
          <button
            type="button"
            className="btn btn-ghost text-primary text-sm btn-link decoration-transparent"
            onClick={changeFlow}
          >
            ورود به حساب کاربری
          </button>
        </div>
      ) : null}
    </div>
  );
}

export { AuthSignupFlow };
