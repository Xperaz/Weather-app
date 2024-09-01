import useWeatherApi from "@/utils/useWeatherApi";
import { createContext, useContext, useEffect, useState } from "react";

interface WeatherContextType {
  city: string;
  setCity: (city: string) => void;
  weatherData: ReturnType<typeof useWeatherApi>;
  favoriteCities: string[];
  addCityToFavorites: (city: string) => void;
  removeCityFromFavorites: (city: string) => void;
}

interface WeatherProviderProps {
  children: React.ReactNode;
}

const weatherContext = createContext<WeatherContextType | null>(null);

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const weatherData = useWeatherApi();
  const [city, setCity] = useState("");
  const [favoriteCities, setFavoriteCities] = useState<string[]>([]);

  const removeCityFromFavorites = (city: string) => {
    setFavoriteCities((prev) => prev.filter((item) => item !== city));
  };
  const addCityToFavorites = (city: string) => {
    if (favoriteCities.includes(city)) return;
    setFavoriteCities((prev) => [...prev, city]);
  };

  useEffect(() => {
    if (city.length === 0) return;
    weatherData.fetchWeatherData(city);
  }, [city]);

  return (
    <weatherContext.Provider
      value={{
        city,
        setCity,
        weatherData,
        favoriteCities,
        addCityToFavorites,
        removeCityFromFavorites,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(weatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within WeatherProvider");
  }

  return context;
};
