import React, { useState } from "react";
import { useWeatherContext } from "@/context/weatherContext";
import {
  CityList,
  CityListTitle,
  CityListWrapper,
  CityWrapper,
  FavoriteCityButton,
  FavoriteCityInput,
} from "./styled";
import { RxCross2 } from "react-icons/rx";

const FavoriteCities = ({ message }: { message: string }) => {
  const {
    setCity,
    favoriteCities,
    addCityToFavorites,
    removeCityFromFavorites,
  } = useWeatherContext();

  const [newCity, setNewCity] = useState("");
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const handleAddCity = () => {
    if (newCity.length === 0) return;
    addCityToFavorites(newCity);
    setNewCity("");
  };

  const handleRemoveCity = (city: string) => {
    removeCityFromFavorites(city);
  };

  return (
    <CityListWrapper>
      <CityListTitle>Favorite Cities</CityListTitle>
      <CityList>
        {favoriteCities?.map((cityName, index) => (
          <CityWrapper
            key={index + "_" + cityName}
            style={{
              position: "relative",
            }}
          >
            <RxCross2
              onClick={() => handleRemoveCity(cityName)}
              onMouseEnter={() => setHoveredCity(cityName)}
              onMouseLeave={() => setHoveredCity(null)}
              style={{
                backgroundColor:
                  hoveredCity === cityName ? "#FF7F50" : "transparent",
                borderRadius: hoveredCity === cityName ? "50%" : "0",
              }}
            />
            <p onClick={() => setCity(cityName)}>{cityName}</p>
          </CityWrapper>
        ))}
      </CityList>
      <FavoriteCityInput
        type="text"
        placeholder="Add a new city"
        value={newCity}
        onKeyDown={(e) => {
          if (e.key === "Enter" && newCity.length > 0) {
            handleAddCity();
          }
        }}
        onChange={(e) => setNewCity(e.target.value)}
      />
      <FavoriteCityButton
        onClick={() => {
          if (newCity.length > 0) {
            handleAddCity();
          }
        }}
      >
        Add City
      </FavoriteCityButton>
    </CityListWrapper>
  );
};

export default FavoriteCities;
