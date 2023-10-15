import { Eye20 } from "@/assets/icons/Eye20";
import { Filter24 } from "@/assets/icons/Filter24";
import { Search20 } from "@/assets/icons/Search20";
import { Pagination } from "@/shared/pagination";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { SupportFilterDialog } from "./partials/supportFilterDialog";
import { Chat24 } from "@/assets/icons/Chat24";

const CONDITION = false;

function SupportList() {
  const [isSupportFilterDialogOpen, setIsSupportFilterDialogOpen] =
    useState(false);

  if (CONDITION)
    <Fragment>
      <div className="w-3/5 my-auto h-full flex flex-col justify-center items-center mx-auto max-w-full">
        <img src="/images/support-empty.png" alt="support empty" />
        <span className="font-light">هنوز تیکت پشتیبانی ایجاد نشده است.</span>
        <Link to="./create" className="btn btn-primary w-full mt-10">
          <Chat24 /> ایجاد تیکت جدید
        </Link>
      </div>
    </Fragment>;

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
          onClick={() => setIsSupportFilterDialogOpen(true)}
        >
          <Filter24 />
          فیلتر‌ها
        </button>
        <Link to="./create" className="btn btn-primary">
          <Chat24 />
          ایجاد تیکت جدید
        </Link>
      </div>
      <h3 className="text-lg font-bold mt-4 mb-6">لیست سفارشات</h3>
      <table className="table table-auto text-right text-base">
        <thead>
          <tr>
            <th>
              <span className="badge-accent p-2 rounded-xl">#</span>
            </th>
            <th>عنوان</th>
            <th>نوع تیکت پشتیبانی</th>
            <th>شماره تیکت</th>
            <th>زمان آخرین پیام</th>
            <th>پیام جدید</th>
            <th>وضعیت</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="badge-accent p-2 rounded-xl">1</span>
            </td>
            <td>درخواست بازگشت وجه</td>
            <td>درخواست ریفاند</td>
            <td>۹۳۸۱</td>
            <td>
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </td>
            <td>
              <span className="badge-secondary w-9 py-2 inline-block text-center rounded-full text-grey-800">
                12
              </span>
            </td>
            <td>
              <span className="badge-info px-2 py-1 rounded-xl">
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
            <td>درخواست بازگشت وجه</td>
            <td>درخواست ریفاند</td>
            <td>۹۳۸۱</td>
            <td>
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </td>
            <td>
              <span className="badge-secondary w-9 py-2 inline-block text-center rounded-full text-grey-800">
                12
              </span>
            </td>
            <td>
              <span className="badge-info px-2 py-1 rounded-xl">
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
            <td>درخواست بازگشت وجه</td>
            <td>درخواست ریفاند</td>
            <td>۹۳۸۱</td>
            <td>
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </td>
            <td>
              <span className="badge-secondary w-9 py-2 inline-block text-center rounded-full text-grey-800">
                12
              </span>
            </td>
            <td>
              <span className="badge-info px-2 py-1 rounded-xl">
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
            <td>درخواست بازگشت وجه</td>
            <td>درخواست ریفاند</td>
            <td>۹۳۸۱</td>
            <td>
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </td>
            <td>
              <span className="badge-secondary w-9 py-2 inline-block text-center rounded-full text-grey-800">
                12
              </span>
            </td>
            <td>
              <span className="badge-info px-2 py-1 rounded-xl">
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
            <td>درخواست بازگشت وجه</td>
            <td>درخواست ریفاند</td>
            <td>۹۳۸۱</td>
            <td>
              {new Intl.DateTimeFormat("fa-IR", {
                dateStyle: "short",
                timeStyle: "short",
              }).format(new Date())}
            </td>
            <td>
              <span className="badge-secondary w-9 py-2 inline-block text-center rounded-full text-grey-800">
                12
              </span>
            </td>
            <td>
              <span className="badge-info px-2 py-1 rounded-xl">
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
      <SupportFilterDialog
        isOpen={isSupportFilterDialogOpen}
        closeModal={() => setIsSupportFilterDialogOpen(false)}
      />
    </Fragment>
  );
}

export default SupportList;
