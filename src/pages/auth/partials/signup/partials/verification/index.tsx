import { Edit24 } from "@/assets/icons/Edit24";
import { RadialProgress } from "@/components/radialProgress";
import { OtpInput } from "@/shared/otpInput";
import { FormEvent, useEffect, useState } from "react";
import { useCountdown } from "usehooks-ts";

interface IAuthSignupVerificationStepProps {
  persistedPhone: string;
  changeStep: () => void;
}

function AuthSignupVerificationStep({
  changeStep,
  persistedPhone,
}: IAuthSignupVerificationStepProps) {
  const [otpValue, setOtpValue] = useState("");
  const [error, setError] = useState(false);

  const [count, { startCountdown, resetCountdown }] = useCountdown({
    countStart: 60,
    intervalMs: 1000,
    countStop: 0,
  });

  useEffect(() => {
    startCountdown();
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault;
  };

  const handleReset = () => {
    resetCountdown();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col items-start justify-center gap-y-4 pb-5 sm:pb-0"
    >
      <h2 className="text-base sm:text-xl font-bold text-grey-800">
        کد فعالسازی رو وارد کنید.
      </h2>
      <div className="flex items-center justify-between w-full">
        <span className="text-sm sm:text-base text-grey-600">
          کد ۵ رقمی به شماره {persistedPhone} ارسال شد.
        </span>
        <button
          type="button"
          className="btn btn-link btn-ghost text-grey-600 text-sm decoration-transparent"
          onClick={changeStep}
        >
          <Edit24 />
          ویرایش شماره
        </button>
      </div>
      <OtpInput
        error={false}
        valueLength={5}
        value={otpValue}
        handleChange={(value) => {
          if (error) setError(false);
          setOtpValue(value);
        }}
      />
      <div className="flex items-center justify-between w-full">
        <div className="flex items-start flex-col gap-y-4">
          <span className="text-xs text-grey-500">لطفا منتظر بمونید</span>
          {count > 0 ? (
            <span className="text-sm text-grey-600">
              کد فعالسازی در حال ارساله
            </span>
          ) : null}
          {count === 0 ? (
            <button
              type="button"
              className="p-0 text-grey-600 text-sm"
              onClick={handleReset}
            >
              درخواست مجدد کد فعالسازی
            </button>
          ) : null}
        </div>
        <RadialProgress max={60} progress={count} />
      </div>
      <button className="btn btn-block btn-primary">ورود به حساب کاربری</button>
    </form>
  );
}

export { AuthSignupVerificationStep };
