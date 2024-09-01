import React, { useState } from "react";
import {
  StyledHeader,
  StyledInput,
  StyledInputWrapper,
  StyledLogo,
} from "./styled";
import { FaSearch } from "react-icons/fa";
import { useWeatherContext } from "@/context/weatherContext";

const Header = () => {
  const { setCity } = useWeatherContext();
  const [inputCity, setInputCity] = useState("");

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
      <StyledLogo onClick={() => window.location.reload()}>SkyCast</StyledLogo>
      <StyledInputWrapper>
        <StyledInput
          type="text"
          placeholder="Enter city name..."
          value={inputCity}
          onChange={handleCityChange}
          onKeyDown={handleKeyDown}
        />
        <FaSearch
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#3096b4",
            height: "20px",
            width: "20px",
          }}
        />
      </StyledInputWrapper>
    </StyledHeader>
  );
};

export default Header;
