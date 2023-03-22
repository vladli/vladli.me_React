import useWeather from "hooks/useWeather";

const Weather = () => {
  const { data, loading } = useWeather("Seoul");

  if (loading) return <p>Loading...</p>;
  return (
    <div className="mx-2 mt-2 flex flex-col items-center rounded-md border border-primary p-2">
      <p>{data?.name}</p>
      <p>{data && Math.round(data.main.temp)} &deg;C</p>
    </div>
  );
};

export default Weather;
