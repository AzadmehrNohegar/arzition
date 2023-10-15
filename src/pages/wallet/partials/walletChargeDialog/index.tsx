import { CloseSquare20 } from "@/assets/icons/CloseSquare20";
import { CourseUp20 } from "@/assets/icons/CourseUp20";
import { Dialog } from "@/components/dialog";
import { IExtendedDialogProps } from "@/model";
import { Controller, useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";

interface IWalletChangeDialogForm {
  value: string;
}

function WalletChargeDialog({ isOpen, closeModal }: IExtendedDialogProps) {
  const {
    handleSubmit,
    control,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues: {
      value: "",
    },
  });

  const onSubmit = (values: IWalletChangeDialogForm) => {
    console.log(values);
  };

  return (
    <Dialog
      placement="center"
      size="standard"
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <Dialog.Title className="font-bold text-lg flex items-center justify-between p-4 border-b border-b-gray-200">
        <span>افزایش موجودی کیف پول</span>
        <button className="btn btn-ghost btn-square">
          <CloseSquare20 />
        </button>
      </Dialog.Title>
      <Dialog.Panel className="p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <Controller
            control={control}
            rules={{
              required: true,
              min: {
                value: 100,
                message: "از مقدار مجاز کمتر است.",
              },
            }}
            name="value"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <div className="rounded-xl border border-grey-200 flex items-stretch">
                <NumericFormat
                  id="value"
                  placeholder="مقدار تراکنش  را وارد کنید"
                  value={value}
                  onChange={onChange}
                  thousandSeparator
                  valueIsNumericString
                  className="w-full input outline-none focus:outline-none focus:border-none rounded-xl"
                />
                <label
                  htmlFor="value"
                  className="inline-flex items-center px-2 roundedtl-xl rounded-tl-xl text-sm bg-grey-100"
                >
                  <span>تومان</span>
                </label>
              </div>
            )}
          />
          <button
            className="btn btn-primary mt-10"
            disabled={!isDirty || !isValid}
          >
            <CourseUp20 /> افزایش موجودی
          </button>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
}

export { WalletChargeDialog };
