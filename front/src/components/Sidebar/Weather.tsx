import useWeather from "hooks/useWeather";

//icons
import { WiStrongWind } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { MdLocationCity } from "react-icons/md";

const Weather = () => {
  const { data, loading } = useWeather("Seoul");
  if (loading || !data) return <p>Loading...</p>;

  const icon = data?.weather[0]?.icon;
  var iconUrl = "https://openweathermap.org/img/w/" + icon + ".png";

  return (
    <div className="mt-2 grid grid-cols-2">
      <div className="flex items-center justify-center">
        <img
          src={iconUrl}
          alt="Weather icon"
          className="rounded-full border border-dashed border-primary p-1"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="flex items-center gap-1 font-semibold">
          <MdLocationCity size={20} />
          {data.name}
        </p>
        <p className="flex items-center gap-1">
          <CiTempHigh size={20} />
          {Math.round(data.main.temp)} &deg;C
        </p>
        <p className="flex items-center gap-1">
          <WiStrongWind size={20} />
          {Math.round(data.wind.speed)} m/s
        </p>
      </div>
    </div>
  );
};

export default Weather;
