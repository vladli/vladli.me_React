import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form/dist/types";
import Input from "./Input";

interface IFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  [key: string]: any;
}
// eslint-disable-next-line react/display-name
const FormInput = React.forwardRef<HTMLInputElement, IFormInput>(
  ({ name, register, required, ...rest }, ref) => (
    <Input
      ref={ref}
      name={name}
      register={register}
      required={required}
      {...rest}
    />
  )
);

export default FormInput;
