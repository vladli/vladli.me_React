import React from "react";

type Props = {
  name: string;
  register?: any;
  required?: boolean;
  labeled?: boolean;
  options: any;
};

export default function Select({ register, options, name, ...rest }: Props) {
  return <div>Select</div>;
}
