import { CloseSquare20 } from "@/assets/icons/CloseSquare20";
import { UeUnionEuropea20 } from "@/assets/icons/UeUnionEuropea20";
import { UnitedStatesOfAmerica20 } from "@/assets/icons/UnitedStatesOfAmerica20";
import { Checkbox } from "@/components/checkbox";
import { DatePicker } from "@/components/datepicker";
import { Dialog } from "@/components/dialog";
import { Select } from "@/components/select";
import { IExtendedDialogProps } from "@/model";

function OrderFilterDialog({ closeModal, isOpen }: IExtendedDialogProps) {
  return (
    <Dialog
      placement="center"
      size="standard"
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <Dialog.Title className="font-bold text-lg flex items-center justify-between p-4 border-b border-b-gray-200">
        <span>افزودن فیلتر</span>
        <button className="btn btn-ghost btn-square">
          <CloseSquare20 />
        </button>
      </Dialog.Title>
      <Dialog.Panel className="p-4 flex flex-col gap-y-4">
        <div className="flex flex-wrap items-start gap-x-2 gap-y-4">
          <h4 className="w-full basis-full text-start">وضعیت:</h4>
          <Checkbox
            containerClassName="badge-accent p-2 rounded-xl"
            label="موفق"
          />
          <Checkbox
            containerClassName="badge-accent p-2 rounded-xl"
            label="نا موفق"
          />
          <Checkbox
            containerClassName="badge-accent p-2 rounded-xl"
            label="بازگشت داده شده"
          />
          <Checkbox
            containerClassName="badge-accent p-2 rounded-xl"
            label="در حال بررسی"
          />
        </div>
        <div className="flex flex-wrap items-start gap-x-2 gap-y-4">
          <h4 className="w-full basis-full text-start">نوع ارز:</h4>
          <Checkbox
            containerClassName="badge-accent p-2 rounded-xl"
            label={
              <span className="flex items-center gap-x-2">
                <UnitedStatesOfAmerica20 />
                <span>USD</span>
              </span>
            }
          />
          <Checkbox
            containerClassName="badge-accent p-2 rounded-xl"
            label={
              <span className="flex items-center gap-x-2">
                <UeUnionEuropea20 />
                <span>EUR</span>
              </span>
            }
          />
        </div>
        <div className="flex flex-wrap items-start gap-x-2 gap-y-4">
          <h4 className="w-full basis-full text-start">نوع ارز:</h4>
          <Select
            className="w-full text-start"
            options={["آزمون تافل", "آزمون ایلتس"]}
            selected={"یک گزینه را انتخاب کنید"}
            setSelected={() => {}}
          />
        </div>
        <div className="flex flex-wrap items-start gap-x-2 gap-y-4">
          <DatePicker
            range
            containerClassName="w-full"
            id="time"
            placeholder="ساعت را وارد کنید..."
          />
        </div>
        <button className="btn w-36 ms-auto btn-primary">اعمال فیلتر</button>
      </Dialog.Panel>
    </Dialog>
  );
}

export { OrderFilterDialog };
