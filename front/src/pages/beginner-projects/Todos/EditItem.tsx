import Button from "components/Button";
import Input from "components/Form/Input";
import InputGroup from "components/Form/InputGroup";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  id: any;
  value: string;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  setItemText: Dispatch<SetStateAction<string>>;
  updateChecked: any;
};

const EditItem = ({
  id,
  value,
  setIsEditing,
  setItemText,
  updateChecked,
}: Props) => {
  const [originalText] = useState(value);
  const [text, setText] = useState<string>(value);
  const updateText = (e: React.FormEvent<HTMLInputElement>) =>
    setText(e.currentTarget.value);

  const handleFinished = () => {
    setIsEditing(false);
    if (originalText !== text) {
      updateChecked({
        params: {
          _id: id,
          text: text,
        },
      }).then(() => {
        setItemText(text);
      });
    }
  };

  return (
    <InputGroup>
      <Input name="EditItem" size="xs" value={text} onChange={updateText} />

      <Button size="xs" onClick={handleFinished}>
        &#10003;
      </Button>
    </InputGroup>
  );
};

export default EditItem;
