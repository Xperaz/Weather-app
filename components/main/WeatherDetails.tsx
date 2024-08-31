import React from "react";
import { StyledInfoDetails } from "./styled";

const WeatherDetails = ({
  currentWeatherData,
}: {
  currentWeatherData: any;
}) => {
  return (
    <StyledInfoDetails>
      <div className="info-details">
        <div className="info-details__item">
          <p>Humidity</p>
          <p>{currentWeatherData.main.humidity}%</p>
        </div>
        <div className="info-details__item">
          <p>Pressure</p>
          <p>{currentWeatherData.main.pressure} hPa</p>
        </div>
        <div className="info-details__item">
          <p>Wind</p>
          <p>{currentWeatherData.wind.speed} m/s</p>
        </div>
      </div>
    </StyledInfoDetails>
  );
};

export default WeatherDetails;
