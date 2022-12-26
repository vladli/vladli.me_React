import React from "react";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register?: any;
  required?: boolean;
  [key: string]: any;
}
const Input = ({ name, register, required, ...rest }: IInput) => {
  return (
    <div className="mb-3 w-full">
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {name}
        <input
          className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 shadow outline-none focus:outline-none focus:ring"
          id={name}
          {...register(name, { required })}
          {...rest}
        />
      </label>
    </div>
  );
};

export default Input;
