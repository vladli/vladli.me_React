import React, { forwardRef } from "react";
import { Data } from "hooks/useWeatherForecast";
import { useTranslation } from "react-i18next";

type Props = {
  data: Data;
};

const TD = forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ children }, ref) => {
  return (
    <td ref={ref} className="text-center">
      {children}
    </td>
  );
});

const Item = ({ data }: Props) => {
  const { t } = useTranslation("beginnerProjects");
  const time = () => {
    return data.list.map((item, key) => {
      const Hour = new Date(item.dt * 1000).toLocaleTimeString("en-GB", {
        hour: "numeric",
      });
      return <TD key={key}>{Hour}</TD>;
    });
  };
  const icon = () => {
    return data.list.map((item, key) => {
      var iconcode = item.weather[0].icon;
      var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
      return (
        <td key={key}>
          <img src={iconurl} alt="" className="m-auto" />
        </td>
      );
    });
  };
  const temp = () => {
    return data.list.map((item, key) => {
      return <TD key={key}>{~~item.main.temp}</TD>;
    });
  };
  const precipitation = () => {
    return data.list.map((item, key) => {
      return <TD key={key}>{Math.trunc(item.pop * 100)}</TD>;
    });
  };
  const wind = () => {
    return data.list.map((item, key) => {
      return <TD key={key}>{~~item.wind.speed}</TD>;
    });
  };
  const humidity = () => {
    return data.list.map((item, key) => {
      return <TD key={key}>{Math.round(item.main.humidity / 5) * 5}</TD>;
    });
  };
  return (
    <tbody>
      <tr>
        <TD>{t("Weather.Time")}</TD>
        {time()}
      </tr>
      <tr>
        <TD></TD>
        {icon()}
      </tr>
      <tr>
        <TD>&#8451;</TD>
        {temp()}
      </tr>
      <tr>
        <TD>
          {t("Weather.Precipitation")}
          <p className="text-center text-sm">(%)</p>
        </TD>
        {precipitation()}
      </tr>
      <tr>
        <TD>
          {t("Weather.Wind")}
          <p className="text-center text-sm">(m/s)</p>
        </TD>
        {wind()}
      </tr>
      <tr>
        <TD>
          {t("Weather.Humidity")}
          <p className="text-center text-sm">(%)</p>
        </TD>
        {humidity()}
      </tr>
    </tbody>
  );
};

export default Item;
