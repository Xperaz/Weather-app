"use client";
import useWeatherApi from "@/utils/useWeatherApi";
import { StyledTitle } from "./index";
import { useEffect, useState } from "react";
export default function Home() {
  const [city, setCity] = useState("London");
  const {
    isLoading,
    error,
    currentWeather,
    hourlyTemperature,
    forecast,
    fetchWeatherData,
  } = useWeatherApi();

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  console.log("isLoading: ", isLoading);
  console.log("error: ", error);
  console.log("currentWeather: ", currentWeather);
  console.log("temparature: ", hourlyTemperature);
  console.log("forcast: ", forecast);

  return (
    <main>
      <StyledTitle>Hello World</StyledTitle>
      <button onClick={() => setCity("London")}>London</button>
    </main>
  );
}
