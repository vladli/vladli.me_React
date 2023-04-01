import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
  const { i18n } = useTranslation();
  const apiKey = import.meta.env.VITE_OPEN_WEATHER;
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: city,
        appid: apiKey,
        units: "metric",
        lang: i18n.resolvedLanguage,
      },
    }).then((response: AxiosResponse) => {
      setData(response.data);
      setLoading(false);
    });
  }, [city, i18n.resolvedLanguage]);

  return { data, loading };
};

export default useWeather;
