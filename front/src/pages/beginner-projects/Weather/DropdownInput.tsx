import { forwardRef, useEffect, useState } from "react";
import Input, { Props } from "../../../components/Form/Input";
import Dropdown from "components/Dropdown/Dropdown";

type DropDownProps = {
  datalist: any;
  city: any;
  setCity: any;
} & Props;

const DropdownInput = forwardRef<HTMLInputElement, DropDownProps>(
  ({ id, datalist, city, setCity, ...rest }, ref) => {
    const [open, setOpen] = useState(datalist.length > 0 ? true : false);

    const updateCity =
      (name: string, latitude: number, longitude: number) => () => {
        setOpen(false);
        (document.activeElement as HTMLElement).blur();
        setCity({
          ...city,
          name: name,
          latitude: latitude,
          longitude: longitude,
        });
      };

    useEffect(() => {
      if (datalist.length > 0) {
        setOpen(true);
      } else setOpen(false);
    }, [datalist]);

    return (
      <div className="flex flex-col items-center">
        <Input {...rest} />
        <Dropdown open={open} horizontal="center">
          <Dropdown.Menu>
            {datalist.map((data: any, i: number) => (
              <Dropdown.Item
                key={i}
                onClick={updateCity(data.name, data.latitude, data.longitude)}
              >
                {data.name + ", " + data.country}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
);

export default DropdownInput;
