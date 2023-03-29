import Button from "components/Button";
import Checkbox from "components/Form/Checkbox";
import axiosAPI from "config/axiosAPI";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import { DataProps } from ".";

type Props = {
  item: DataProps;
  refetch: any;
} & React.HTMLAttributes<HTMLLIElement>;

const Item = ({ item, refetch }: Props) => {
  const [checked, setChecked] = useState(item.completed);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = () => {
    setIsDeleting(true);
  };
  const completedToggle = (e: any) => {
    setIsEditing(true);
    setChecked(!checked);
  };

  useEffect(() => {
    if (isEditing) {
      axiosAPI
        .put("/api/todos/item", null, {
          params: {
            _id: item._id,
            completed: checked,
          },
        })
        .then(() => setIsEditing(false));
    }
  }, [checked]);

  useEffect(() => {
    if (isDeleting) {
      axiosAPI
        .delete("/api/todos/item", {
          params: {
            _id: item._id,
          },
        })
        .then(() => {
          refetch();
          setIsDeleting(false);
        });
    }
  }, [isDeleting]);

  return (
    <li className="mb-2 flex gap-2">
      <Checkbox
        checked={checked}
        onChange={completedToggle}
        disabled={isEditing}
      />
      {item.text}

      <div className="flex basis-10/12 justify-end">
        <Button
          shape="square"
          size="sm"
          color="ghost"
          disabled={isDeleting}
          onClick={handleDelete}
        >
          <MdDeleteForever color="red" size={20} />
        </Button>
      </div>
    </li>
  );
};

export default Item;
