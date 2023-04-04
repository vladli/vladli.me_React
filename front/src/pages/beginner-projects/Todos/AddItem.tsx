import Button from "components/Button";
import Input from "components/Form/Input";
import InputGroup from "components/Form/InputGroup";
import axiosAPI from "config/axiosAPI";
import { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
import { z } from "zod";

const AddItem = ({ refetch }: any) => {
  const [item, setItem] = useState("");
  const [error, setError] = useState("");

  const mySchema = z.string().min(1);

  const setValue = (e: React.FormEvent<HTMLInputElement>) => {
    setItem(e.currentTarget.value);
    const checkSchema = mySchema.safeParse(e.currentTarget.value);
    if (!checkSchema.success) {
      setError(checkSchema.error.format()._errors[0]);
    } else setError("");
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const checkSchema = mySchema.safeParse(item);
    if (!checkSchema.success) {
      setError(checkSchema.error.format()._errors[0]);
    } else {
      axiosAPI
        .post("/api/todos/item", {
          text: item,
        })
        .then(() => {
          setItem("");
          refetch();
        });
    }
  };

  return (
    <div className="my-4">
      <form onSubmit={handleSubmit}>
        <InputGroup className="justify-center">
          <Input
            name="AddTodo"
            color={error ? "error" : "ghost"}
            value={item}
            onChange={setValue}
            size="sm"
          />

          <Button type="submit" size="sm">
            <MdLibraryAdd />
          </Button>
        </InputGroup>
        {error ? <div className="text-center">{error}</div> : null}
      </form>
    </div>
  );
};

export default AddItem;
