import { CourseUp24 } from "@/assets/icons/CourseUp24";
import { Fragment, useState } from "react";
import { WalletChargeDialog } from "./partials/walletChargeDialog";

function Wallet() {
  const [isWalletChargeDialogOpen, setIsWalletChargeDialogOpen] =
    useState(false);

  return (
    <Fragment>
      <div className="w-3/5 my-auto h-full flex flex-col justify-center items-center mx-auto max-w-full">
        <img src="/images/wallet-empty.png" alt="wallet empty" />
        <span className="font-light">هنوز تراکنشی انجام نداده‌اید.</span>
        <button
          onClick={() => setIsWalletChargeDialogOpen(true)}
          className="btn btn-primary btn-block mt-10"
        >
          <CourseUp24 /> افزایش موجودی
        </button>
      </div>
      <WalletChargeDialog
        isOpen={isWalletChargeDialogOpen}
        closeModal={() => setIsWalletChargeDialogOpen(false)}
      />
    </Fragment>
  );
}

export default Wallet;
