import React from "react";
import {
  InfoDetailsItem,
  InfoDetailsItemLeft,
  InfoDetailsItemWrapper,
  InfoDetailsWrapper,
  StyledInfoDetails,
  VisibilityItem,
} from "./styled";
import { WiBarometer, WiDaySunny, WiHumidity } from "react-icons/wi";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { currentWeatherResponseType } from "@/utils/useWeatherApi";

const WeatherDetails = ({
  currentWeatherData,
}: {
  currentWeatherData: currentWeatherResponseType;
}) => {
  const sunsetTime = new Date(
    currentWeatherData.sys.sunset * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunriseTime = new Date(
    currentWeatherData.sys.sunrise * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const visibility = currentWeatherData.visibility / 1000;

  return (
    <InfoDetailsWrapper>
      <StyledInfoDetails>
        <InfoDetailsItemLeft>
          <InfoDetailsItemWrapper>
            <WiHumidity
              style={{
                fontSize: "4em",
                color: "#3096B4",
                fontWeight: 700,
                lineHeight: 1,
              }}
            />
            <InfoDetailsItem>
              <p>Humidity</p>
              <p>{currentWeatherData.main.humidity}%</p>
            </InfoDetailsItem>
          </InfoDetailsItemWrapper>

          <InfoDetailsItemWrapper>
            <WiBarometer
              style={{
                fontSize: "4em",
                color: "#3096B4",
                fontWeight: 700,
                lineHeight: 1,
              }}
            />
            <InfoDetailsItem>
              <p>Pressure</p>
              <p>{currentWeatherData.main.humidity}%</p>
            </InfoDetailsItem>
          </InfoDetailsItemWrapper>
        </InfoDetailsItemLeft>

        <InfoDetailsItemLeft>
          <InfoDetailsItemWrapper>
            <FiSunset
              style={{
                fontSize: "4em",
                color: "#3096B4",
                fontWeight: 700,
                lineHeight: 1,
              }}
            />
            <InfoDetailsItem>
              <p>Sunset</p>
              <p>{sunsetTime}</p>
            </InfoDetailsItem>
          </InfoDetailsItemWrapper>

          <InfoDetailsItemWrapper>
            <FiSunrise
              style={{
                fontSize: "4em",
                color: "#3096B4",
                fontWeight: 700,
                lineHeight: 1,
              }}
            />
            <InfoDetailsItem>
              <p>Sunrise</p>
              <p>{sunriseTime}</p>
            </InfoDetailsItem>
          </InfoDetailsItemWrapper>
        </InfoDetailsItemLeft>
      </StyledInfoDetails>

      <VisibilityItem>
        <WiDaySunny
          style={{
            fontSize: "4em",
            color: "#fff",
            fontWeight: 700,
            lineHeight: 1,
          }}
        />
        <InfoDetailsItem>
          <p>Visibility</p>
          <p>{visibility} km</p>
        </InfoDetailsItem>
      </VisibilityItem>
    </InfoDetailsWrapper>
  );
};

export default WeatherDetails;
