import Box from "components/Box";
import useWeatherForecast from "hooks/useWeatherForecast";
import { useState } from "react";
import Item from "./Item";
import Table from "components/Table/Table";
import SearchCity from "./SearchCity";
import { useTranslation } from "react-i18next";

const Weather = () => {
  const { t } = useTranslation("beginnerProjects");
  const [city, setCity] = useState({
    name: "Seoul, KR",
    latitude: 37.5833,
    longitude: 127,
  });
  const { data, loading, error } = useWeatherForecast(
    city.latitude,
    city.longitude
  );

  if (loading || !data) return null;

  return (
    <Box className="w-full overflow-x-auto p-4">
      <SearchCity {...{ city, setCity }} />
      {!error ? (
        <div className="m-2 text-center text-lg">
          {t("Weather.Location")}:{" "}
          <span className="capitalize">{city.name}</span>
        </div>
      ) : null}
      <Table className="w-full">
        <Item data={data} />
      </Table>
    </Box>
  );
};

export default Weather;
