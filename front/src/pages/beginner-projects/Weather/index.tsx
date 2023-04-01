import useWeather from "hooks/useWeather";
import React, { useEffect } from "react";

const Weather = () => {
  const { data, loading } = useWeather("Seoul");
  console.log(data);
  if (loading || !data) return null;
  return <div>{data.name}</div>;
};

export default Weather;
