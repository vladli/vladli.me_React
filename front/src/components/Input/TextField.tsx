import React from "react";

interface ITextField {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
}
const TextField: React.FC<ITextField> = ({
  name,
  type,
  placeholder,
  label,
}) => {
  return (
    <div>
      <div className="mb-3 pt-0">
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            {label}
          </label>
        )}
        <input
          className="relative w-full rounded border-0 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 shadow outline-none focus:outline-none focus:ring"
          id={name}
          type="text"
          placeholder="Username"
        />
      </div>
    </div>
  );
};

export default TextField;
