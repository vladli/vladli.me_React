import Button from "components/Button";
import Input from "components/Form/Input";
import InputGroup from "components/Form/InputGroup";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  value: string;
  setEditedText: Dispatch<SetStateAction<string>>;
};

const EditItem = ({ value, setEditedText }: Props) => {
  const [text, setText] = React.useState(value);
  const updateText = (e: React.FormEvent<HTMLInputElement>) =>
    setText(e.currentTarget.value);
  const handleFinished = () => {
    setEditedText(text);
  };
  return (
    <div>
      <InputGroup>
        <Input name="EditItem" size="xs" value={text} onChange={updateText} />
        <Button size="xs" onClick={handleFinished}>
          &#10003;
        </Button>
      </InputGroup>
    </div>
  );
};

export default EditItem;
