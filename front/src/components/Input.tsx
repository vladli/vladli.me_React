import clsx from "clsx";
import React from "react";

type Props = {
  name: string;
  required?: boolean;
  labeled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { name, required, labeled = false, className, ...rest } = props;
  return (
    <>
      {labeled ? (
        <label
          className={clsx(
            "block select-none text-sm font-medium text-gray-900 dark:text-white",
            className
          )}
        >
          {name}
          {required && <span className="ml-1 text-red-500">{"*"}</span>}
          <input
            ref={ref}
            className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 shadow outline-none focus:outline-none focus:ring"
            id={name}
            {...rest}
          />
        </label>
      ) : (
        <input
          ref={ref}
          className={clsx(
            "rounded p-1 text-slate-600 placeholder-slate-300 focus:outline-none focus:ring",
            className
          )}
          id={name}
          {...rest}
        />
      )}
    </>
  );
});

export default Input;
Input.displayName = "Input";
