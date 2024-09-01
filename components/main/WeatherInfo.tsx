import { useWeatherContext } from "@/context/weatherContext";
import React from "react";
import Hero from "./Hero";
import { StyledMainInfoWrapper, StyledWeatherWrapper } from "./styled";
import WeatherDetails from "./WeatherDetails";
import ForecastStats from "./ForecastStats";
import Loader from "../common/Loader";
import Error from "../common/Error";
import CampaignMessage from "../common/CampaignMessage";

const WeatherInfo = () => {
  const { weatherData, city } = useWeatherContext();

  if (!weatherData.currentWeather && city.length === 0) {
    return (
      <CampaignMessage message="Please enter a city name in search field  to get the weather details" />
    );
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
