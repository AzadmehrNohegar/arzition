import { Clipboard24 } from "@/assets/icons/Clipboard24";
import { Eye20 } from "@/assets/icons/Eye20";
import { Filter24 } from "@/assets/icons/Filter24";
import { Search20 } from "@/assets/icons/Search20";
import { UeUnionEuropea20 } from "@/assets/icons/UeUnionEuropea20";
import { Pagination } from "@/shared/pagination";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { OrderFilterDialog } from "./partials/orderFilterDialog";

function OrderList() {
  const [isOrderFilterDialogOpen, setIsOrderFilterDialogOpen] = useState(false);
  return (
    <Fragment>
      {/* <div className="w-3/5 my-auto h-full flex flex-col justify-center items-center mx-auto max-w-full">
        <img src="/images/support-empty.png" alt="support empty" />
        <span className="font-light">هنوز تیکت پشتیبانی ایجاد نشده است.</span>
        <Link to="./create" className="btn btn-primary w-full mt-10">
          <Clipboard24 /> ثبت سفارش
        </Link>
      </div> */}
      <div className="flex items-center gap-x-4">
        <div className="flex items-center bg-grey-50 rounded-xl">
          <input
            id="search"
            placeholder="جست و جو..."
            className="input bg-grey-50 focus:outline-none focus:border-none w-full"
          />
          <label htmlFor="search" className="px-4 border-r border-r-grey-200">
            <Search20 />
          </label>
        </div>
        <button
          className="btn btn-ghost ms-auto"
          onClick={() => setIsOrderFilterDialogOpen(true)}
        >
          <Filter24 />
          فیلتر‌ها
        </button>
        <Link to="./create" className="btn btn-primary">
          <Clipboard24 />
          ثبت سفارش
        </Link>
      </div>
      <h3 className="text-lg font-bold mt-4 mb-6">لیست سفارشات</h3>
      <table className="table table-auto text-right text-base">
        <thead>
          <tr>
            <th>
              <span className="badge-accent p-2 rounded-xl">#</span>
            </th>
            <th>شماره سفارش</th>
            <th>نوع سفارش</th>
            <th>نوع ارز</th>
            <th>مبلغ</th>
            <th>زمان تراکنش</th>
            <th>وضعیت</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="badge-accent p-2 rounded-xl">1</span>
            </td>
            <td>۹۳۸۱</td>
            <td>آزمون تافل</td>
            <td>
              <span className="inline-flex gap-x-2">
                <UeUnionEuropea20 />
                Eur
              </span>
            </td>
            <td>
              <strong>
                ۱۰۰,۰۰۰ <span>تومان</span>
              </strong>
            </td>
            <td>
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </td>
            <td>
              <span className="badge-accent px-2 py-1 rounded-xl">
                در حال بررسی
              </span>
            </td>
            <td className="text-end">
              <Link to={`./${2}`} className="btn btn-ghost btn-sm btn-square">
                <Eye20 />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <span className="badge-accent p-2 rounded-xl">1</span>
            </td>
            <td>۹۳۸۱</td>
            <td>آزمون تافل</td>
            <td>
              <span className="inline-flex gap-x-2">
                <UeUnionEuropea20 />
                Eur
              </span>
            </td>
            <td>
              <strong>
                ۱۰۰,۰۰۰ <span>تومان</span>
              </strong>
            </td>
            <td>
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </td>
            <td>
              <span className="badge-accent px-2 py-1 rounded-xl">
                در حال بررسی
              </span>
            </td>
            <td className="text-end">
              <Link to={`./${2}`} className="btn btn-ghost btn-sm btn-square">
                <Eye20 />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <span className="badge-accent p-2 rounded-xl">1</span>
            </td>
            <td>۹۳۸۱</td>
            <td>آزمون تافل</td>
            <td>
              <span className="inline-flex gap-x-2">
                <UeUnionEuropea20 />
                Eur
              </span>
            </td>
            <td>
              <strong>
                ۱۰۰,۰۰۰ <span>تومان</span>
              </strong>
            </td>
            <td>
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </td>
            <td>
              <span className="badge-accent px-2 py-1 rounded-xl">
                در حال بررسی
              </span>
            </td>
            <td className="text-end">
              <Link to={`./${2}`} className="btn btn-ghost btn-sm btn-square">
                <Eye20 />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <span className="badge-accent p-2 rounded-xl">1</span>
            </td>
            <td>۹۳۸۱</td>
            <td>آزمون تافل</td>
            <td>
              <span className="inline-flex gap-x-2">
                <UeUnionEuropea20 />
                Eur
              </span>
            </td>
            <td>
              <strong>
                ۱۰۰,۰۰۰ <span>تومان</span>
              </strong>
            </td>
            <td>
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </td>
            <td>
              <span className="badge-accent px-2 py-1 rounded-xl">
                در حال بررسی
              </span>
            </td>
            <td className="text-end">
              <Link to={`./${2}`} className="btn btn-ghost btn-sm btn-square">
                <Eye20 />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <span className="badge-accent p-2 rounded-xl">1</span>
            </td>
            <td>۹۳۸۱</td>
            <td>آزمون تافل</td>
            <td>
              <span className="inline-flex gap-x-2">
                <UeUnionEuropea20 />
                Eur
              </span>
            </td>
            <td>
              <strong>
                ۱۰۰,۰۰۰ <span>تومان</span>
              </strong>
            </td>
            <td>
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </td>
            <td>
              <span className="badge-accent px-2 py-1 rounded-xl">
                در حال بررسی
              </span>
            </td>
            <td className="text-end">
              <Link to={`./${2}`} className="btn btn-ghost btn-sm btn-square">
                <Eye20 />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <span className="badge-accent p-2 rounded-xl">1</span>
            </td>
            <td>۹۳۸۱</td>
            <td>آزمون تافل</td>
            <td>
              <span className="inline-flex gap-x-2">
                <UeUnionEuropea20 />
                Eur
              </span>
            </td>
            <td>
              <strong>
                ۱۰۰,۰۰۰ <span>تومان</span>
              </strong>
            </td>
            <td>
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </td>
            <td>
              <span className="badge-accent px-2 py-1 rounded-xl">
                در حال بررسی
              </span>
            </td>
            <td className="text-end">
              <Link to={`./${2}`} className="btn btn-ghost btn-sm btn-square">
                <Eye20 />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <span className="badge-accent p-2 rounded-xl">1</span>
            </td>
            <td>۹۳۸۱</td>
            <td>آزمون تافل</td>
            <td>
              <span className="inline-flex gap-x-2">
                <UeUnionEuropea20 />
                Eur
              </span>
            </td>
            <td>
              <strong>
                ۱۰۰,۰۰۰ <span>تومان</span>
              </strong>
            </td>
            <td>
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </td>
            <td>
              <span className="badge-accent px-2 py-1 rounded-xl">
                در حال بررسی
              </span>
            </td>
            <td className="text-end">
              <Link to={`./${2}`} className="btn btn-ghost btn-sm btn-square">
                <Eye20 />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination
        count={20}
        next={null}
        page={1}
        perPage={10}
        prev={null}
        setPage={console.log}
        setPerPage={console.log}
      />
      <OrderFilterDialog
        isOpen={isOrderFilterDialogOpen}
        closeModal={() => setIsOrderFilterDialogOpen(false)}
      />
    </Fragment>
  );
}

export default OrderList;
