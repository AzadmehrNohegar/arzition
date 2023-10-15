import { Edit20 } from "@/assets/icons/Edit20";
import { MoneyTransfer20 } from "@/assets/icons/MoneyTransfer20";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ProfileViewCardRow from "./partials/profileViewCardRow";

function AccountView() {
  return (
    <Fragment>
      <div className="flex relative justify-between items-start py-4 px-5">
        <div className="w-full bg-primary-100 h-[80px] absolute top-0 left-0 z-0 rounded-t-xl"></div>
        <div className="flex items-baseline relative z-[1]">
          <img
            src="https://picsum.photos/130/130"
            className="rounded-full border-4 border-white w-[130px] h-[130px] object-cover"
            alt="user profile"
          />
          <h2 className="text-base sm:text-xl font-bold relative bottom-8">
            علی‌رضا بختیاری
          </h2>
        </div>
        <Link
          to="./edit"
          className="btn btn-ghost btn-md btn-square relative z-[1]"
        >
          <Edit20 />
        </Link>
      </div>
      <div className="shadow-strong w-full py-5 px-4 my-5 rounded-xl">
        <h3 className="text-lg font-bold">اطلاعات حساب کاربری</h3>
        <div className="flex gap-x-8 mt-4">
          <address className="not-italic text-grey-800">
            <span className="text-sm text-grey-600">شماره موبایل:</span>{" "}
            ۰۹۱۲۶۳۷۲۹۳۴
          </address>
          <address className="not-italic text-grey-800">
            <span className="text-sm text-grey-600">آدرس ایمیل:</span>{" "}
            alirezabakhtiyari@gmail.com
          </address>
          <address className="not-italic text-grey-800">
            <span className="text-sm text-grey-600">کد ملی:</span> 00154448002
          </address>
        </div>
      </div>
      <div className="shadow-strong w-full py-5 px-4 my-5 rounded-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">اطلاعات حساب‌های بانکی</h3>
          <button className="btn btn-ghost text-success">
            <MoneyTransfer20 />
            افزودن کارت بانکی
          </button>
        </div>
        <div className="flex flex-col gap-y-4 mt-4">
          <ProfileViewCardRow />
          <ProfileViewCardRow />
          <ProfileViewCardRow />
          <ProfileViewCardRow />
        </div>
      </div>
    </Fragment>
  );
}

export default AccountView;
