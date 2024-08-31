import { useWeatherContext } from "@/context/weatherContext";
import React from "react";

const WeatherInfo = () => {
  const { weatherData } = useWeatherContext();

  console.log(weatherData);
  return <div>WeatherInfo</div>;
};

export default WeatherInfo;
