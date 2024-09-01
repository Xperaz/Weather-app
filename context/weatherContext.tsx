import { useLocalStorage } from "@/utils/useLocalStorage";
import useWeatherApi from "@/utils/useWeatherApi";
import { createContext, useContext, useEffect, useState } from "react";

interface WeatherContextType {
  city: string;
  setCity: (city: string) => void;
  weatherData: ReturnType<typeof useWeatherApi>;
  favoriteCities: string[] | null;
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
  const { storedValue: favoriteCities, setValue: setFavoriteCities } =
    useLocalStorage<string[]>("favoriteCities", []);

  const removeCityFromFavorites = (city: string) => {
    const updatedCities = favoriteCities?.filter((item) => item !== city);
    setFavoriteCities(updatedCities || []);
  };

  const addCityToFavorites = (city: string) => {
    if (!favoriteCities?.includes(city)) {
      setFavoriteCities([...(favoriteCities ?? []), city]);
    }
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
