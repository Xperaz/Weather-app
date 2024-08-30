"use client";
import useWeatherApi from "@/utils/useWeatherApi";
import { PublicLayout } from "./index";
import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import WeatherInfo from "@/components/main/WeatherInfo";
import Footer from "@/components/footer/Footer";
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
    <PublicLayout>
      <Header />
      <WeatherInfo />
      <Footer />
    </PublicLayout>
  );
}
