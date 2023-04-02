import { forwardRef } from "react";
import Input, { Props } from "./Input";

type DropDownProps = {
  datalist: any;
} & Props;

const DropdownInput = forwardRef<HTMLInputElement, DropDownProps>(
  ({ id, datalist, ...rest }, ref) => {
    return (
      <>
        <Input list="datalist" {...rest} />
        <datalist id="datalist">
          {datalist.map((data: any, i: number) => (
            <option key={i} value={data.name + ", " + data.country} />
          ))}
        </datalist>
      </>
    );
  }
);

export default DropdownInput;
