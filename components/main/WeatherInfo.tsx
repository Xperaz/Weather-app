import { useWeatherContext } from "@/context/weatherContext";
import React from "react";
import Hero from "./Hero";
import { StyledMainInfoWrapper, StyledWeatherWrapper } from "./styled";
import WeatherDetails from "./WeatherDetails";
import ForecastStats from "./ForecastStats";
import Loader from "../common/Loader";
import Error from "../common/Error";
import FavoriteCities from "../common/FavoriteCities";

const WeatherInfo = () => {
  const { weatherData, city } = useWeatherContext();

  if (!weatherData.currentWeather && city.length === 0) {
    return <FavoriteCities message="Add your favorite city: " />;
  }

  if (weatherData.isLoading) {
    return <Loader />;
  }

  if (weatherData.error) {
    return <Error error={weatherData.error} />;
  }

  return (
    <>
      {weatherData.currentWeather && weatherData.forecast && (
        <StyledWeatherWrapper>
          <Hero currentWeatherData={weatherData.currentWeather} />
          <StyledMainInfoWrapper>
            <WeatherDetails currentWeatherData={weatherData.currentWeather} />
            <ForecastStats forecastData={weatherData.forecast} />
          </StyledMainInfoWrapper>
        </StyledWeatherWrapper>
      )}
    </>
  );
};

export default WeatherInfo;
