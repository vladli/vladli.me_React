import axios from "axios";
import { useEffect, useState } from "react";

type Data = {
  name: string;
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
};

const useWeather = (city: string) => {
  const apiKey = import.meta.env.VITE_OPEN_WEATHER;
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, [city]);

  return { data, loading };
};

export default useWeather;
