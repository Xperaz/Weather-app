import useWeatherApi from "@/utils/useWeatherApi";
import { createContext, useContext, useEffect, useState } from "react";

interface WeatherContextType {
  city: string;
  setCity: (city: string) => void;
  weatherData: ReturnType<typeof useWeatherApi>;
}

interface WeatherProviderProps {
  children: React.ReactNode;
}

const weatherContext = createContext<WeatherContextType | null>(null);

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const weatherData = useWeatherApi();
  const [city, setCity] = useState("");

  useEffect(() => {
    if (city.length === 0) return;
    weatherData.fetchWeatherData(city);
  }, [city]);

  return (
    <weatherContext.Provider value={{ city, setCity, weatherData }}>
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
