import { AltArrowLeft24 } from "@/assets/icons/AltArrowLeft24";
import { BagFill20 } from "@/assets/icons/BagFill20";
import { Card20 } from "@/assets/icons/Card20";
import { Clipboard24 } from "@/assets/icons/Clipboard24";
import { ClipboardFill20 } from "@/assets/icons/ClipboardFill20";
import { DocumentFill20 } from "@/assets/icons/DocumentFill20";
import { UnitedStatesOfAmerica24 } from "@/assets/icons/UnitedStatesOfAmerica24";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function OrderSingle() {
  return (
    <Fragment>
      <ul className="flex items-center text-sm">
        <li>
          <Link to=".." className="flex gap-x-1 items-center text-grey-600">
            <Clipboard24 />
            <span>لیست سفارشات</span>
            <AltArrowLeft24 />
          </Link>
        </li>
        <li>
          <span className="text-grey-800">سفارش شماره ۱۲۷۲</span>
        </li>
      </ul>
      <div className="shadow-strong p-5 flex gap-y-6 flex-wrap my-5 rounded-xl">
        <h3 className="text-lg font-bold basis-full">جزئیات سفارش</h3>
        <strong className="flex basis-1/3 text-sm items-center gap-x-2">
          <span className="text-grey-600 font-light">شماره سفارش:</span> 1272
        </strong>
        <strong className="flex basis-1/3 text-sm items-center gap-x-2">
          <span className="text-grey-600 font-light">نوع سفارش:</span> آزمون
          آیلتس
        </strong>
        <strong className="flex basis-1/3 text-sm items-center gap-x-2">
          <span className="text-grey-600 font-light">وضعیت:</span>
          <span className="badge-success px-2 py-1 rounded-xl">موفق</span>
        </strong>
        <strong className="flex basis-1/3 text-sm items-center gap-x-2">
          <span className="text-grey-600 font-light">نوع ارز:</span>
          <span className="flex items-center gap-x-2">
            <UnitedStatesOfAmerica24 />
            USD
          </span>
        </strong>
        <strong className="flex basis-1/3 text-sm items-center gap-x-2">
          <span className="text-grey-600 font-light">زمان تراکنش:</span>
          {new Intl.DateTimeFormat("fa-IR", {
            dateStyle: "short",
            timeStyle: "short",
          }).format(new Date())}
        </strong>
      </div>
      <div className="shadow-strong p-5 flex gap-y-6 flex-wrap my-5 rounded-xl">
        <h3 className="text-lg font-bold basis-full">جزئیات پرداخت</h3>
        <strong className="flex basis-1/3 text-sm items-center gap-x-2">
          <span className="text-grey-600 font-light">مبلغ:</span> ۲۵۰,۰۰۰
          <span className="text-grey-600 text-xs">تومان</span>
        </strong>
        <strong className="flex basis-1/3 text-sm items-center gap-x-2">
          <span className="text-grey-600 font-light">نوع پرداخت:</span> درگاه
          پرداخت آیلتس
        </strong>
        <strong className="flex basis-1/3 text-sm items-center gap-x-2">
          <span className="text-grey-600 font-light">وضعیت پرداخت:</span>
          <span className="badge-accent px-2 py-1 rounded-xl">
            در حال بررسی
          </span>
        </strong>

        <strong className="flex basis-1/3 text-sm items-center gap-x-2">
          <span className="text-grey-600 font-light">کد پیگیری:</span>
          ۱۲۳۴۵۶۷۸۹۰
        </strong>
      </div>
      <div className="shadow-strong p-5 my-5 rounded-xl">
        <h3 className="text-lg font-bold basis-full">تاریخچه سفارش</h3>
        <ul className="my-4 flex flex-col gap-y-4">
          <li className="flex items-center gap-x-2 relative before:absolute before:right-[13px] before:top-full before:w-[2px] before:h-[16px] before:bg-primary">
            <span className="inline-block bg-primary p-1 rounded-full text-white">
              <BagFill20 />
            </span>
            <span className="text-primary-500 font-semibold">
              سفارش شما ثبت شد.
            </span>
            <span className="inline-block ms-auto">
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </span>
          </li>
          <li className="flex items-center gap-x-2 relative before:absolute before:right-[13px] before:top-full before:w-[2px] before:h-[16px] before:bg-primary">
            <span className="inline-block bg-primary p-1 rounded-full text-white">
              <ClipboardFill20 />
            </span>
            <span className="text-primary-500 font-semibold">
              سفارش شما تایید شد.
            </span>
            <span className="inline-block ms-auto">
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </span>
          </li>
          <li className="flex items-center gap-x-2 relative before:absolute before:right-[13px] before:top-full before:w-[2px] before:h-[16px] before:bg-primary">
            <span className="inline-block bg-primary p-1 rounded-full text-white">
              <Card20 />
            </span>
            <span className="text-primary-500 font-semibold">
              آماده سازی سفارش پایان یافت.
            </span>
            <span className="inline-block ms-auto">
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </span>
          </li>
          <li className="flex items-center gap-x-2">
            <span className="inline-block bg-success p-1 rounded-full text-white">
              <DocumentFill20 />
            </span>
            <span className="text-success-600 font-semibold">
              سفارش تکمیل شده است.
            </span>
            <span className="inline-block ms-auto">
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default OrderSingle;
