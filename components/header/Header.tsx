import React, { useState } from "react";
import { StyledHeader, StyledInput, StyledInputWrapper, StyledLogo } from ".";
import { CiSearch } from "react-icons/ci";
import { useWeatherContext } from "@/context/weatherContext";

const Header = () => {
  const { city, setCity } = useWeatherContext();
  const [inputCity, setInputCity] = useState(city);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCity(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCity(inputCity);
    }
  };

  return (
    <StyledHeader>
      <StyledLogo>SkyCast</StyledLogo>
      <StyledInputWrapper>
        <StyledInput
          type="text"
          placeholder="Enter city name..."
          value={inputCity}
          onChange={handleCityChange}
          onKeyDown={handleKeyDown}
        />
        <CiSearch
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#7284ff",
          }}
        />
      </StyledInputWrapper>
    </StyledHeader>
  );
};

export default Header;
