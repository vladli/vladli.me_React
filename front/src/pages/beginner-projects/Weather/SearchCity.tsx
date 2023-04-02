import Button from "components/Button";
import Input from "components/Form/Input";
import InputGroup from "components/Form/InputGroup";
import { Dispatch, SetStateAction, useState } from "react";
import { MdSearch } from "react-icons/md";

type Props = {
  setCity: Dispatch<SetStateAction<string>>;
};

const SearchCity = ({ setCity }: Props) => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    setCity(value);
  };
  return (
    <InputGroup className="justify-center">
      <Input
        name="City"
        placeholder="City"
        autoComplete="off"
        value={value}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>
        <MdSearch />
      </Button>
    </InputGroup>
  );
};

export default SearchCity;
