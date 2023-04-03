import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export type Data = {
  city: {
    name: string;
  };
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    pop: number;
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
    wind: {
      gust: number;
      speed: number;
    };
  }[];
};

const useWeatherForecast = (latitude: number, longitude: number) => {
  const { i18n } = useTranslation();
  const apiKey = import.meta.env.VITE_OPEN_WEATHER;
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    axios("https://api.openweathermap.org/data/2.5/forecast", {
      params: {
        lat: latitude,
        lon: longitude,
        appid: apiKey,
        units: "metric",
        cnt: 8,
        lang: i18n.resolvedLanguage,
      },
    })
      .then((response: AxiosResponse) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error: Error) => setError(error.message));
  }, [latitude, longitude, i18n.resolvedLanguage]);

  return { data, loading, error };
};

export default useWeatherForecast;
