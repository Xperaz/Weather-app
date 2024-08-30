import React from "react";
import { StyledHeader, StyledInput, StyledInputWrapper, StyledLogo } from ".";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>SkyCast</StyledLogo>
      <StyledInputWrapper>
        <StyledInput type="text" placeholder="Enter city name..." />
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
