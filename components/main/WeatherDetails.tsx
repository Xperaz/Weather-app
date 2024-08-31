import React from "react";
import {
  Divider,
  InfoDetailsItem,
  InfoDetailsItemLeft,
  InfoDetailsItemWrapper,
  StyledInfoDetails,
} from "./styled";
import { WiBarometer, WiHumidity } from "react-icons/wi";
import { FiSunrise, FiSunset } from "react-icons/fi";

const WeatherDetails = ({
  currentWeatherData,
}: {
  currentWeatherData: any;
}) => {
  if (!currentWeatherData) {
    return <div>Loading...</div>;
  }

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

  return (
    <StyledInfoDetails>
      <InfoDetailsItemLeft>
        <InfoDetailsItemWrapper>
          <WiHumidity
            style={{
              fontSize: "5em",
              color: "#7284ff",
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
              fontSize: "5em",
              color: "#7284ff",
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

      {/* <Divider /> */}
      <InfoDetailsItemLeft>
        <InfoDetailsItemWrapper>
          <FiSunset
            style={{
              fontSize: "4em",
              color: "#7284ff",
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
              color: "#7284ff",
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
  );
};

export default WeatherDetails;
