import { Transition } from "@headlessui/react";
import clsx from "clsx";
import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  containerClassName?: string;
}

const Input = forwardRef(
  (props: IInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { error, containerClassName, ...rest } = props;
    return (
      <div
        className={clsx("flex items-start flex-col w-full", containerClassName)}
      >
        <input ref={ref} {...rest} />
        <Transition show={!!error}>
          <Transition.Child
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <label className="label absolute">
              <span className="text-danger text-xs">{error?.message}</span>
            </label>
          </Transition.Child>
        </Transition>
      </div>
    );
  }
);

export { Input };
