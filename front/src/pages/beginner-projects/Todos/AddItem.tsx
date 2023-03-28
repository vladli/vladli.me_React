import Button from "components/Button";
import Input from "components/Form/Input";
import InputGroup from "components/Form/InputGroup";
import axiosAPI from "config/axiosAPI";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const AddItem = ({ refetch }: any) => {
  const { t } = useTranslation("beginnerProjects");
  const [item, setItem] = useState("");
  const setValue = (e: React.FormEvent<HTMLInputElement>) => {
    setItem(e.currentTarget.value);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axiosAPI.post("/api/todos/item", { text: item }).then((res: any) => {
      setItem("");
      refetch();
    });
  };
  return (
    <div className="my-4">
      <form onSubmit={handleSubmit}>
        <InputGroup className="justify-center">
          <Input name="AddTodo" value={item} onChange={setValue} />
          <Button type="submit">{t("Todos.AddItem")}</Button>
        </InputGroup>
      </form>
    </div>
  );
};

export default AddItem;
