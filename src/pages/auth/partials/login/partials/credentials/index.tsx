import { Input } from "@/components/input";
import { MOBILE_FORMAT } from "@/constants";
import { useForm } from "react-hook-form";

interface IAuthLoginCredentialsStepProps {
  changeStep: () => void;
  persistPhone: (val: string) => void;
}

interface IAuthLoginCredentialsStepForm {
  phone: string;
}

function AuthLoginCredentialsStep({
  changeStep,
  persistPhone,
}: IAuthLoginCredentialsStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = (values: IAuthLoginCredentialsStepForm) => {
    persistPhone(values.phone);
    changeStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-start justify-center gap-y-4"
    >
      <h2 className="text-base sm:text-xl font-bold text-grey-800">
        ورود به حساب کاربری
      </h2>
      <span className="text-sm sm:text-base text-grey-600">
        برای ورود به حساب کاربری لطفا شماره موبایل خود را وارد کنید
      </span>
      <Input
        type="text"
        className=" input input-bordered w-full h-10 sm:h-12 ltr text-end"
        placeholder="شماره موبایل"
        error={errors.phone}
        {...register("phone", {
          required: "شماره موبایل خود را وارد کنید.",
          pattern: {
            value: MOBILE_FORMAT,
            message: "شماره موبایل نادرست است.",
          },
        })}
      />
      <button
        type="submit"
        className="btn btn-primary my-5 btn-block text-[13px] sm:text-base"
      >
        دریافت کد فعالسازی
      </button>
    </form>
  );
}

export { AuthLoginCredentialsStep };
