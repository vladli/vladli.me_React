import Button from "components/Button";
import DropdownInput from "components/Form/DropdownInput";
import InputGroup from "components/Form/InputGroup";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import axios from "axios";
import useDebounce from "hooks/useDebounce";

type Props = {
  setCity: Dispatch<SetStateAction<string>>;
};

export type GeoProps = {
  data: {
    country: string;
    name: string;
    state: string;
  };
}[];

const SearchCity = ({ setCity }: Props) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);
  const [searchData, setSearchData] = useState<GeoProps>([]);
  const apiKey = import.meta.env.VITE_OPEN_WEATHER;
  const searchCity = (city: string) => {
    if (city) {
      axios
        .get("http://api.openweathermap.org/geo/1.0/direct", {
          params: {
            q: city,
            appid: apiKey,
            limit: 5,
          },
        })
        .then((res: any) => setSearchData(res.data));
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setCity(value);
  };
  useEffect(() => {
    searchCity(value);
  }, [debouncedValue]);

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup className="justify-center">
        <DropdownInput
          name="CitySearch"
          datalist={searchData}
          value={value}
          onChange={handleChange}
        />
        <Button type="submit">
          <MdSearch />
        </Button>
      </InputGroup>
    </form>
  );
};

export default SearchCity;
