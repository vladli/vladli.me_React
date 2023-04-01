import Button from "components/Button";
import Checkbox from "components/Form/Checkbox";
import useAxios from "hooks/useAxios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import { DataProps } from ".";
import EditItem from "./EditItem";

type Props = {
  item: DataProps;
  refetch: any;
} & React.HTMLAttributes<HTMLLIElement>;

const Item = ({ item, refetch }: Props) => {
  const { t } = useTranslation("beginnerProjects");
  const [checked, setChecked] = useState(item.completed);
  const [isEditing, setIsEditing] = useState(false);
  const [itemText, setItemText] = useState(item.text);
  const [{ loading: editLoading }, updateChecked] = useAxios(
    {
      url: "/api/todos/item",
      method: "put",
    },
    { manual: true }
  );

  const [{ loading: deleteLoading }, deleteItem] = useAxios(
    {
      url: "/api/todos/item",
      method: "delete",
    },
    { manual: true }
  );

  const handleChecked = () => {
    updateChecked({
      params: {
        _id: item._id,
        completed: !checked,
      },
    }).then(() => setChecked(!checked));
  };
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    deleteItem({
      params: {
        _id: item._id,
      },
    }).then(() => {
      toast.info(t("Todos.ItemDeleted"));
      refetch();
    });
  };

  return (
    <li className="mb-2 flex items-center">
      <div className="flex w-10/12 basis-11/12 gap-2">
        <Checkbox
          checked={checked}
          onChange={handleChecked}
          disabled={editLoading}
        />

        {isEditing ? (
          <EditItem
            id={item._id}
            value={itemText}
            {...{ setIsEditing, setItemText, updateChecked }}
          />
        ) : (
          <p className="text-ellipsis overflow-hidden" onDoubleClick={handleEdit}>
            {itemText}
          </p>
        )}
      </div>
      <div className="flex basis-1/12 justify-end">
        <Button
          shape="square"
          size="sm"
          color="ghost"
          disabled={deleteLoading}
          onClick={handleDelete}
        >
          <MdDeleteForever color="red" size={20} />
        </Button>
      </div>
    </li>
  );
};

export default Item;
