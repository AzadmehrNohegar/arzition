import { toast } from "@/model";
import { useToastStore } from "@/store/toast";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useEffect, useState } from "react";
// import { CloseSquare, InfoSquare } from "react-iconly";

interface IToastProps {
  toast: toast;
  index: number;
}

function Toast({ toast }: IToastProps) {
  const {
    message,
    title,
    options: { type },
  } = toast;

  const [show, setShow] = useState(true);

  const { deleteToast } = useToastStore();

  useEffect(() => {
    const hideInterval = setTimeout(() => setShow(false), 3000);
    const popInterval = setTimeout(() => deleteToast(toast.id), 3500);
    return () => {
      clearTimeout(popInterval);
      clearTimeout(hideInterval);
    };
  }, []);

  const handleDelete = () => {
    // setShow(false);
    setTimeout(() => deleteToast(toast.id), 500);
  };

  return (
    <Transition
      appear
      show={show}
      as={Fragment}
      enter="transition-all duration-500"
      enterFrom="opacity-0 scale-50"
      enterTo="opacity-100 scale-100"
      leave="transition-all duration-500"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-75"
    >
      <div
        className={clsx(
          "justify-start border-r-8 p-4 rounded-xl flex flex-col gap-y-4 dura",
          type === "primary" && "bg-grey-50 border-r-grey-200",
          type === "secondary" && "bg-secondary-50 border-r-secondary-200",
          type === "info" && "bg-info-50 border-r-info-200",
          type === "error" && "bg-danger-50 border-r-danger-200",
          type === "success" && "bg-success-50 border-r-success-200",
        )}
      >
        <div className="flex items-center w-full justify-between">
          <h6
            className={clsx(
              "w-full flex items-center gap-x-2 font-bold",
              type === "primary" && "text-primary-600",
              type === "secondary" && "text-secondary-600",
              type === "info" && "text-info-600",
              type === "error" && "text-danger-600",
              type === "success" && "text-success-600",
            )}
          >
            {/* <InfoSquare filled /> */}
            {title}
          </h6>
          <button onClick={handleDelete} className="btn btn-ghost p-0 btn-sm">
            {/* <CloseSquare filled /> */}
          </button>
        </div>
        <p className="text-justify text-grey-600 text-sm text-ellipsis break-words whitespace-normal">
          {message}
        </p>
      </div>
    </Transition>
  );
}

export { Toast };
