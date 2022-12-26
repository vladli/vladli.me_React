import React from "react";

interface ITextField extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  text?: string;
  [key: string]: any;
}
const TextField: React.FC<ITextField> = ({ name, text, ...rest }) => {
  return (
    <div className="mb-3 w-full">
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {text}
        <input
          className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 shadow outline-none focus:outline-none focus:ring"
          id={name}
          {...rest}
        />
      </label>
    </div>
  );
};

export default TextField;
