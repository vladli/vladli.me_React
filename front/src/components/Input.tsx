import classNames from "classnames";
import React from "react";

type Props = {
  name: string;
  required?: boolean;
  labeled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  name,
  required,
  labeled = false,
  className,
  ...rest
}: Props) => {
  return (
    <>
      {labeled ? (
        <label
          className={classNames(
            "block select-none text-sm font-medium text-gray-900 dark:text-white",
            className
          )}
        >
          {name}
          {required && <span className="ml-1 text-red-500">{"*"}</span>}
          <input
            className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 shadow outline-none focus:outline-none focus:ring"
            id={name}
            {...rest}
          />
        </label>
      ) : (
        <input
          className={classNames(
            "rounded p-1 text-slate-600 placeholder-slate-300 focus:outline-none focus:ring",
            className
          )}
          id={name}
          {...rest}
        />
      )}
    </>
  );
};

export default Input;
