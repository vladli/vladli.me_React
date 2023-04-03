import Button from "components/Button";
import DropdownInput from "pages/beginner-projects/Weather/DropdownInput";
import InputGroup from "components/Form/InputGroup";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import axios from "axios";
import useDebounce from "hooks/useDebounce";

type Props = {
  city: any;
  setCity: any;
};

export type GeoProps = {
  data: {
    country: string;
    name: string;
    latitude: number;
    longitude: number;
  };
}[];

const SearchCity = ({ city, setCity }: Props) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 400);
  const [searchData, setSearchData] = useState<GeoProps>([]);
  const apiKey = import.meta.env.VITE_APININJAS;
  const searchCity = (city: string) => {
    if (city) {
      axios
        .get("https://api.api-ninjas.com/v1/city", {
          params: {
            name: city,
            limit: 5,
          },
          headers: {
            "X-Api-Key": apiKey,
          },
        })
        .then((res: any) => {
          setSearchData(res.data);
        });
    } else setSearchData([]);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    searchCity(value);
  }, [debouncedValue]);

  return (
    <>
      <DropdownInput
        name="CitySearch"
        datalist={searchData}
        value={value}
        onChange={handleChange}
        {...{ city, setCity }}
      />
    </>
  );
};

export default SearchCity;
