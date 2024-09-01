import { useState } from "react";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export interface currentWeatherResponseType {
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  main: {
    temp: number;
    humidity: number;
  };
  dt: number;
  weather: Array<{ description: string }>;
  visibility: number;
}

export interface forecastListResponseType {
  dt: number;
  main: {
    temp: number;
  };
}

export interface forecastResponseType {
  list: forecastListResponseType[];
}

interface WeatherApiState {
  isLoading: boolean;
  error: string | null;
  currentWeather: currentWeatherResponseType | null;
  forecast: forecastResponseType | null;
}

const useWeatherApi = () => {
  const [state, setState] = useState<WeatherApiState>({
    isLoading: false,
    error: null,
    currentWeather: null,
    forecast: null,
  });

  const fetchWeatherData = async (cityName: string) => {
    const weatherUrl = `${API_BASE}/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    const forecastUrl = `${API_BASE}/forecast?q=${cityName}&appid=${API_KEY}&units=metric`;

    try {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(weatherUrl),
        axios.get(forecastUrl),
      ]);

      setState({
        isLoading: false,
        error: null,
        currentWeather: weatherResponse.data,
        forecast: forecastResponse.data,
      });
    } catch (error) {
      let errorMessage = "An error occurred, please try again later.";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message;
      }

      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));

      console.error(error);
    }
  };

  return {
    ...state,
    fetchWeatherData,
  };
};

export default useWeatherApi;
