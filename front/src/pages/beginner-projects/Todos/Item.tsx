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
  const [checkPressed, setCheckPressed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [itemText, setItemText] = useState(item.text);
  const [{ loading: editLoading }, updateChecked] = useAxios(
    {
      url: "/api/todos/item",
      method: "put",
    },
    { manual: true }
  );

  const [isDeleting, setIsDeleting] = useState(false);
  const [{ loading: deleteLoading }, deleteItem] = useAxios(
    {
      url: "/api/todos/item",
      method: "delete",
    },
    { manual: true }
  );

  const handleChecked = () => {
    setChecked(!checked);
    setCheckPressed(true);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (checkPressed || (isEditing && itemText)) {
      updateChecked({
        params: {
          _id: item._id,
          text: itemText,
          completed: checked,
        },
      }).then(() => {
        setCheckPressed(false);
        if (itemText) {
          setIsEditing(false);
        }
      });
    }
  }, [checkPressed, itemText]);

  const handleDelete = () => {
    setIsDeleting(true);
  };

  useEffect(() => {
    if (isDeleting) {
      deleteItem({
        params: {
          _id: item._id,
        },
      }).then(() => {
        toast.info(t("Todos.ItemDeleted"));
        refetch();
      });
    }
  }, [isDeleting]);

  return (
    <li className="mb-2 flex">
      <div className="flex basis-11/12 gap-2">
        <Checkbox
          checked={checked}
          onChange={handleChecked}
          disabled={editLoading}
        />

        {isEditing ? (
          <EditItem value={itemText} {...{ setIsEditing, setItemText }} />
        ) : (
          <span onDoubleClick={handleEdit}>{itemText}</span>
        )}
      </div>
      <div className="flex basis-1/12 justify-end">
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
