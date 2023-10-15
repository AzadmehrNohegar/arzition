import { AddSquare24 } from "@/assets/icons/AddSquare24";
import { Input } from "@/components/input";
import { MOBILE_FORMAT } from "@/constants";
import { useForm } from "react-hook-form";

interface IAuthSignupCredentialsStepProps {
  changeStep: () => void;
  persistPhone: (val: string) => void;
}

interface IAuthSignupCredentialsStepForm {
  first_name: string;
  last_name: string;
  phone: string;
}

function AuthSignupCredentialsStep({
  changeStep,
  persistPhone,
}: IAuthSignupCredentialsStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthSignupCredentialsStepForm>({
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
    },
  });

  const onSubmit = (values: IAuthSignupCredentialsStepForm) => {
    persistPhone(values.phone);
    changeStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-start justify-center gap-y-4"
    >
      <h2 className="text-base sm:text-xl font-bold text-grey-800">
        ایجاد حساب کاربری
      </h2>
      <span className="text-sm sm:text-base text-grey-600">
        برای ایجاد حساب کاربری لطفا اطلاعات خود را وارد کنید
      </span>
      <Input
        type="text"
        className=" input input-bordered w-full h-10 sm:h-12"
        containerClassName="my-1.5"
        placeholder="نام"
        error={errors.first_name}
        {...register("first_name", {
          required: "نام خود را وارد کنید.",
          min: {
            value: 2,
            message: "نام نمی‌تواند از ۲ حرف کمتر باشد",
          },
        })}
      />
      <Input
        type="text"
        className=" input input-bordered w-full h-10 sm:h-12"
        containerClassName="my-1.5"
        placeholder="نام خانوادگی"
        error={errors.last_name}
        {...register("last_name", {
          required: "نام خانوادگی خود را وارد کنید.",
          min: {
            value: 2,
            message: "نام خانوادگی نمی‌تواند از ۲ حرف کمتر باشد",
          },
        })}
      />
      <Input
        type="text"
        className=" input input-bordered w-full h-10 sm:h-12 ltr text-end"
        containerClassName="my-1.5"
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
        <AddSquare24 />
        ایجاد حساب کاربری
      </button>
    </form>
  );
}

export { AuthSignupCredentialsStep };
