import { useWeatherContext } from "@/context/weatherContext";
import React from "react";
import Hero from "./Hero";
import { StyledMainInfoWrapper, StyledWeatherWrapper } from "./styled";
import WeatherDetails from "./WeatherDetails";
import ForecastStats from "./ForecastStats";

const WeatherInfo = () => {
  const { weatherData } = useWeatherContext();

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <StyledWeatherWrapper>
      <Hero currentWeatherData={weatherData.currentWeather} />
      <StyledMainInfoWrapper>
        <WeatherDetails currentWeatherData={weatherData.currentWeather} />
        <ForecastStats />
      </StyledMainInfoWrapper>
    </StyledWeatherWrapper>
  );
};

export default WeatherInfo;
