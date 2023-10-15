import { ArrowLeft24 } from "@/assets/icons/ArrowLeft24";
import { Cap40 } from "@/assets/icons/Cap40";
import { Clipboard24 } from "@/assets/icons/Clipboard24";
import { Crown40 } from "@/assets/icons/Crown40";
import { Eye20 } from "@/assets/icons/Eye20";
import { Gamepad40 } from "@/assets/icons/Gamepad40";
import { Home40 } from "@/assets/icons/Home40";
import { Server40 } from "@/assets/icons/Server40";
import { Suitcase40 } from "@/assets/icons/Suitcase40";
import { TransferVertical24 } from "@/assets/icons/TransferVertical24";
import { UeUnionEuropea24 } from "@/assets/icons/UeUnionEuropea24";
import { UnitedStatesOfAmerica24 } from "@/assets/icons/UnitedStatesOfAmerica24";
import { Wallet24 } from "@/assets/icons/Wallet24";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <Fragment>
      <div className="flex justify-evenly items-center w-full bg-grey-50 rounded-xl">
        <div className="flex items-center justify-center gap-x-3 p-4">
          <div className="text-white bg-primary-400 rounded-xl p-2.5">
            <Wallet24 />
          </div>
          <div className="flex flex-col justify-between gap-y-2">
            <span className="text-grey-600">موجودی کیف پول</span>
            <strong className="text-base sm:text-xl font-bold">
              5,663,600{" "}
              <span className="text-sm text-grey-500 font-normal">تومان</span>
            </strong>
          </div>
        </div>
        <div className="w-[2px] bg-grey-200 h-12"></div>
        <div className="flex items-center justify-center gap-x-3 p-4">
          <div className="text-white bg-secondary-400 rounded-xl p-2.5">
            <Clipboard24 />
          </div>
          <div className="flex flex-col justify-between gap-y-2">
            <span className="text-grey-600">تعداد سفارش‌های کل</span>
            <strong className="text-base sm:text-xl font-bold">
              5 <span className="text-sm text-grey-500 font-normal">سفارش</span>
            </strong>
          </div>
        </div>
        <div className="w-[2px] bg-grey-200 h-12"></div>
        <div className="flex items-center justify-center gap-x-3 p-4">
          <div className="text-white bg-danger-400 rounded-xl p-2.5">
            <TransferVertical24 />
          </div>
          <div className="flex flex-col justify-between gap-y-2">
            <span className="text-grey-600">درخواست ریفاند</span>
            <strong className="text-base sm:text-xl font-bold">
              5{" "}
              <span className="text-sm text-grey-500 font-normal">درخواست</span>
            </strong>
          </div>
        </div>
      </div>
      <div className="shadow-strong w-full py-5 px-4 my-5 rounded-xl">
        <div className="flex items-center w-full justify-between">
          <h3 className="text-lg font-bold">آخرین تغییرات نرخ ارز</h3>
          <strong className="text-sm font-semibold text-grey-600">
            <span className="text-xs font-normal text-grey-500">
              آخرین بروزرسانی:
            </span>
            {new Intl.DateTimeFormat("fa-IR", {
              dateStyle: "full",
            }).format(new Date())}
          </strong>
        </div>
        <div className="flex items-center gap-x-4 mt-4">
          <div className="w-full flex justify-between items-center">
            <strong className="text-grey-600 font-semibold inline-flex items-center gap-x-2">
              <UnitedStatesOfAmerica24 />
              <span className="relative top-px z-0">USD</span>
            </strong>
            <strong className="text-base font-bold">
              50,444{" "}
              <span className="text-sm text-grey-500 font-normal">تومان</span>
            </strong>
          </div>
          <div className="w-[2px] bg-grey-200 h-12"></div>

          <div className="w-full flex justify-between items-center">
            <strong className="text-grey-600 font-semibold inline-flex items-center gap-x-2">
              <UeUnionEuropea24 />
              <span className="relative top-px z-0">EUR</span>
            </strong>
            <strong className="text-base font-bold">
              54,654{" "}
              <span className="text-sm text-grey-500 font-normal">تومان</span>
            </strong>
          </div>
        </div>
      </div>
      <div className="py-5 px-4 my-5">
        <h2 className="font-bold text-xl">دسته‌بندی خدمات</h2>
        <div className="flex justify-between gap-x-8 mt-5">
          <Link
            to="service/premium"
            className="rounded-xl bg-grey-50 py-5 px-3.5 inline-flex flex-col gap-y-4 items-center w-full text-center"
          >
            <span className="inline-block p-2.5 rounded-xl bg-primary-100 text-primary">
              <Crown40 />
            </span>
            <span className="text-grey-600">اکانت‌های پرمیوم و تریال</span>
          </Link>
          <Link
            to="service/game"
            className="rounded-xl bg-grey-50 py-5 px-3.5 inline-flex flex-col gap-y-4 items-center w-full text-center"
          >
            <span className="inline-block p-2.5 rounded-xl bg-primary-100 text-primary">
              <Gamepad40 />
            </span>
            <span className="text-grey-600">خرید اکانت بازی</span>
          </Link>
          <Link
            to="service/student"
            className="rounded-xl bg-grey-50 py-5 px-3.5 inline-flex flex-col gap-y-4 items-center w-full text-center"
          >
            <span className="inline-block p-2.5 rounded-xl bg-primary-100 text-primary">
              <Cap40 />
            </span>
            <span className="text-grey-600">دانشجویی و آزمون بین‌المللی</span>
          </Link>
          <Link
            to="service/immigration"
            className="rounded-xl bg-grey-50 py-5 px-3.5 inline-flex flex-col gap-y-4 items-center w-full text-center"
          >
            <span className="inline-block p-2.5 rounded-xl bg-primary-100 text-primary">
              <Suitcase40 />
            </span>
            <span className="text-grey-600">مسافرت و مهاجرت</span>
          </Link>
          <Link
            to="service/reservation"
            className="rounded-xl bg-grey-50 py-5 px-3.5 inline-flex flex-col gap-y-4 items-center w-full text-center"
          >
            <span className="inline-block p-2.5 rounded-xl bg-primary-100 text-primary">
              <Home40 />
            </span>
            <span className="text-grey-600">رزرو هتل و هاستل</span>
          </Link>
          <Link
            to="service/server"
            className="rounded-xl bg-grey-50 py-5 px-3.5 inline-flex flex-col gap-y-4 items-center w-full text-center"
          >
            <span className="inline-block p-2.5 rounded-xl bg-primary-100 text-primary">
              <Server40 />
            </span>
            <span className="text-grey-600">خرید سرور مجازی خارجی</span>
          </Link>
        </div>
      </div>
      <div className="flex items-start my-5 gap-x-8">
        <div className="w-full border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">آخرین سفارش ها</h3>
            <Link to="order" className="btn btn-ghost btn-square">
              <ArrowLeft24 />
            </Link>
          </div>

          <table className="table table-auto text-right">
            <thead>
              <tr>
                <th>شماره سفارش</th>
                <th>نوع سفارش</th>
                <th>وضعیت</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-grey-50">
                <td>۹۳۸۱</td>
                <td>آزمون تافل</td>
                <td>
                  <span className="badge-accent px-2 py-1 rounded-xl">
                    در حال بررسی
                  </span>
                </td>
                <td className="text-end">
                  <Link to="/" className="btn btn-ghost btn-sm btn-square">
                    <Eye20 />
                  </Link>
                </td>
              </tr>
              <tr className="odd:bg-grey-50">
                <td>۹۳۱۱</td>
                <td>آزمون آیلتس</td>
                <td>
                  <span className="badge-success px-2 py-1 rounded-xl">
                    موفق
                  </span>
                </td>
                <td className="text-end">
                  <Link to="/" className="btn btn-ghost btn-sm btn-square">
                    <Eye20 />
                  </Link>
                </td>
              </tr>
              <tr className="odd:bg-grey-50">
                <td>۹۳۸۱</td>
                <td>آزمون تافل</td>
                <td>
                  <span className="badge-accent px-2 py-1 rounded-xl">
                    در حال بررسی
                  </span>
                </td>
                <td className="text-end">
                  <Link to="/" className="btn btn-ghost btn-sm btn-square">
                    <Eye20 />
                  </Link>
                </td>
              </tr>
              <tr className="odd:bg-grey-50">
                <td>۹۳۱۱</td>
                <td>آزمون آیلتس</td>
                <td>
                  <span className="badge-success px-2 py-1 rounded-xl">
                    موفق
                  </span>
                </td>
                <td className="text-end">
                  <Link to="/" className="btn btn-ghost btn-sm btn-square">
                    <Eye20 />
                  </Link>
                </td>
              </tr>
              <tr className="odd:bg-grey-50">
                <td>۹۳۸۱</td>
                <td>آزمون تافل</td>
                <td>
                  <span className="badge-accent px-2 py-1 rounded-xl">
                    در حال بررسی
                  </span>
                </td>
                <td className="text-end">
                  <Link to="/" className="btn btn-ghost btn-sm btn-square">
                    <Eye20 />
                  </Link>
                </td>
              </tr>
              <tr className="odd:bg-grey-50">
                <td>۹۳۱۱</td>
                <td>آزمون آیلتس</td>
                <td>
                  <span className="badge-success px-2 py-1 rounded-xl">
                    موفق
                  </span>
                </td>
                <td className="text-end">
                  <Link to="/" className="btn btn-ghost btn-sm btn-square">
                    <Eye20 />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">آخرین تیکت‌های پشتیبانی</h3>
            <Link to="support" className="btn btn-ghost btn-square">
              <ArrowLeft24 />
            </Link>
          </div>

          <table className="table table-auto text-right">
            <thead>
              <tr>
                <th>عنوان</th>
                <th>پیام جدید</th>
                <th>وضعیت</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-grey-50">
                <td>درخواست بازگشت وجه</td>
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
                  <Link to="/" className="btn btn-ghost btn-sm btn-square">
                    <Eye20 />
                  </Link>
                </td>
              </tr>
              <tr className="odd:bg-grey-50">
                <td>درخواست بازگشت وجه</td>
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
                  <Link to="/" className="btn btn-ghost btn-sm btn-square">
                    <Eye20 />
                  </Link>
                </td>
              </tr>
              <tr className="odd:bg-grey-50">
                <td>درخواست بازگشت وجه</td>
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
                  <Link to="/" className="btn btn-ghost btn-sm btn-square">
                    <Eye20 />
                  </Link>
                </td>
              </tr>
              <tr className="odd:bg-grey-50">
                <td>درخواست بازگشت وجه</td>
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
                  <Link to="/" className="btn btn-ghost btn-sm btn-square">
                    <Eye20 />
                  </Link>
                </td>
              </tr>
              <tr className="odd:bg-grey-50">
                <td>درخواست بازگشت وجه</td>
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
                  <Link to="/" className="btn btn-ghost btn-sm btn-square">
                    <Eye20 />
                  </Link>
                </td>
              </tr>
              <tr className="odd:bg-grey-50">
                <td>درخواست بازگشت وجه</td>
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
                  <Link to="/" className="btn btn-ghost btn-sm btn-square">
                    <Eye20 />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
