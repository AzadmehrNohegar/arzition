import clsx from "clsx";
import { ReactNode } from "react";

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | ReactNode;
  containerClassName?: string;
}

function Checkbox(props: ICheckboxProps) {
  const { label, containerClassName, className, ...rest } = props;

  return (
    <label
      className={clsx(
        "label cursor-pointer inline-flex flex-row-reverse items-center gap-x-2",
        containerClassName
      )}
    >
      <span className="label-text">{label}</span>
      <input
        type="checkbox"
        className={clsx(
          "checkbox checkbox-sm checkbox-primary -scale-x-100",
          className
        )}
        {...rest}
      />
    </label>
  );
}

export { Checkbox };
