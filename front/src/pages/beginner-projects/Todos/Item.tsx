import Checkbox from "components/Form/Checkbox";
import axiosAPI from "config/axiosAPI";
import React, { useEffect, useState } from "react";
import { DataProps } from ".";

type Props = {
  item: DataProps;
} & React.HTMLAttributes<HTMLLIElement>;

const Item = ({ item }: Props) => {
  const [checked, setChecked] = useState(item.completed);
  const completedToggle = (e: any) => {
    setChecked(!checked);
  };
  useEffect(() => {
    if (item.completed !== checked) {
      axiosAPI.put("/api/todos/item", null, {
        params: {
          _id: item._id,
          completed: checked,
        },
      });
    }
  }, [checked]);

  return (
    <li className="mb-2 flex gap-2">
      <Checkbox checked={checked} onChange={completedToggle} />
      {item.text}
    </li>
  );
};

export default Item;
