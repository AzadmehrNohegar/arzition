import { Bell20 } from "@/assets/icons/Bell20";
import { Close20 } from "@/assets/icons/Close20";
import { Menu20 } from "@/assets/icons/Menu20";
import { Settings20 } from "@/assets/icons/Settings20";
import { Wallet20 } from "@/assets/icons/Wallet20";
import { MobileSlideover } from "@/shared/mobileSlideover";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

function Header() {
  const matches = useMediaQuery("(max-width: 768px)");
  const [isMobileSlidoverOpen, setIsMobileSlidoverOpen] = useState(false);

  return (
    <Fragment>
      <header className="w-full p-5 sticky top-0 z-40">
        <div className="flex items-center gap-y-2 py-0 sm:py-[18px] px-0 sm:px-5 bg-transparent sm:bg-grey-50 rounded-xl gap-x-2 flex-wrap sm:flex-nowrap">
          {!matches ? (
            <Link to="/">
              <img src="/images/peer-logo.svg" alt="peer logo" />
            </Link>
          ) : null}
          {matches ? (
            <Link
              to="/account"
              className="btn btn-ghost btn-circle flex items-center gap-x-2 w-fit relative before:absolute before:w-2 before:h-2 before:bg-success before:rounded-full before:bottom-1 before:start-1"
            >
              <img
                src="https://picsum.photos/40/40"
                className="rounded-full"
                alt="user profile"
              />
              <span>علی‌رضا بختیاری</span>
            </Link>
          ) : null}
          <Link
            to="/wallet"
            className="order-last sm:order-none basis-full sm:basis-auto text-sm inline-flex ms-0 sm:ms-auto bg-secondary-100 items-center py-2 px-4 rounded-xl text-grey-600 gap-x-2"
          >
            <Wallet20 />
            موجودی کیف پول
            <span className="inline-flex items-center gap-x-2 ms-auto sm:ms-10">
              <strong className="text-success-600">0</strong>
              تومان
            </span>
          </Link>
          <div
            className="tooltip tooltip-bottom tooltip-primary ms-auto sm:ms-0"
            data-tip="اعلانات"
          >
            <button className="btn btn-ghost text-grey-800 sm:btn-primary btn-square btn-sm sm:text-white">
              <Bell20 />
            </button>
          </div>
          <div
            className="tooltip tooltip-bottom tooltip-primary hidden sm:block"
            data-tip="تنظیمات"
          >
            <button className="btn btn-primary btn-square btn-sm text-white">
              <Settings20 />
            </button>
          </div>
          <button
            className="btn btn-ghost btn-square btn-sm text-grey-800 sm:hidden"
            onClick={() => setIsMobileSlidoverOpen((prevState) => !prevState)}
          >
            {isMobileSlidoverOpen ? <Close20 /> : <Menu20 />}
          </button>
        </div>
      </header>
      <MobileSlideover
        isOpen={isMobileSlidoverOpen}
        setIsOpen={setIsMobileSlidoverOpen}
      />
    </Fragment>
  );
}

export { Header };
