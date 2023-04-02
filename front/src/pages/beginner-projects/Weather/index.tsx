import Box from "components/Box";
import useWeatherForecast from "hooks/useWeatherForecast";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import Table from "components/Table/Table";
import SearchCity from "./SearchCity";

const Weather = () => {
  const [city, setCity] = useState("Seoul");
  const { data, loading, error } = useWeatherForecast(city);

  if (loading || !data) return null;

  return (
    <Box className="w-full overflow-x-auto p-4">
      <SearchCity {...{ setCity }} />
      {!error ? (
        <div className="text-center text-lg">
          Current city: <span className="capitalize">{city}</span>
        </div>
      ) : null}
      <Table className="w-full">
        <Item data={data} />
      </Table>
    </Box>
  );
};

export default Weather;
