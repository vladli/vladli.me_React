import Button from "components/Button";
import Checkbox from "components/Form/Checkbox";
import Input from "components/Form/Input";
import axiosAPI from "config/axiosAPI";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import { DataProps } from ".";
import EditItem from "./EditItem";

type Props = {
  item: DataProps;
  refetch: any;
} & React.HTMLAttributes<HTMLLIElement>;

const Item = ({ item, refetch }: Props) => {
  const [checked, setChecked] = useState(item.completed);
  const [isChecked, setIsChecked] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState("");

  const [isDeleting, setIsDeleting] = useState(false);

  const handleChecked = (e: any) => {
    setIsChecked(true);
    setChecked(!checked);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    setIsDeleting(true);
  };
  useEffect(() => {
    if (isChecked) {
      axiosAPI
        .put("/api/todos/item", null, {
          params: {
            _id: item._id,
            completed: checked,
          },
        })
        .then(() => setIsChecked(false));
    }
  }, [checked]);

  useEffect(() => {
    if (isEditing) {
      axiosAPI
        .put("/api/todos/item", null, {
          params: {
            _id: item._id,
            text: editedText,
          },
        })
        .then(() => {
          refetch();
          setIsEditing(false);
        });
    }
  }, [editedText]);

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
        onChange={handleChecked}
        disabled={isChecked}
      />

      {isEditing ? (
        <EditItem value={item.text} {...{ setIsEditing, setEditedText }} />
      ) : (
        <span onDoubleClick={handleEdit}>{item.text}</span>
      )}
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
