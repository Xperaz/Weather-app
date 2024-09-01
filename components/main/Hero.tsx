import React from "react";
import { LeftHeroInfo, RightHeroInfo, StyledHero } from "./styled";
import { IoSunny } from "react-icons/io5";

const Hero = ({ currentWeatherData }: { currentWeatherData: any }) => {
  const {
    name: cityName = "Unknown",
    sys: { country: countryName = "Unknown", sunrise = 0, sunset = 0 } = {},
    main: { temp: temperature = 0 } = {},
    dt = 0,
  } = currentWeatherData;

  const formatTime = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDay = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleDateString([], {
      weekday: "long",
    });
  };

  return (
    <StyledHero>
      <LeftHeroInfo>
        <IoSunny
          style={{
            fontSize: "3em",
            color: "#fff",
            fontWeight: 700,
            lineHeight: 1,
          }}
        />
        <h1>{temperature.toFixed(1)} °C</h1>
        <p>
          {cityName}, {countryName}
        </p>
      </LeftHeroInfo>
      <RightHeroInfo>
        <p className="day-time">{formatTime(sunset)}</p>
        <p>Sunset time, {formatDay(dt)}</p>
      </RightHeroInfo>
    </StyledHero>
  );
};

export default Hero;
