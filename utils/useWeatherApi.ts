import { useState } from "react";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

type ApiResponse = any; // I am using any here, because I don't know the exact shape of the response (Third-party API)

interface WeatherApiState {
  isLoading: boolean;
  error: string | null;
  currentWeather: ApiResponse | null;
  forecast: ApiResponse | null;
  hourlyTemperature: Array<{ time: string; temperature: number }> | null;
}

const useWeatherApi = () => {
  const [state, setState] = useState<WeatherApiState>({
    isLoading: false,
    error: null,
    currentWeather: null,
    forecast: null,
    hourlyTemperature: null,
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

      // Extract hourly temperature data from the forecast response
      const hourlyTemperature =
        forecastResponse.data.list?.map((item: any) => ({
          time: item.dt_txt,
          temperature: item.main?.temp,
        })) || null;

      setState({
        isLoading: false,
        error: null,
        currentWeather: weatherResponse.data,
        forecast: forecastResponse.data.list.slice(0, 5 * 8),
        hourlyTemperature,
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
