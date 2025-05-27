
import { useState, useEffect } from "react";

interface WeatherData {
  temperature: number;
  description: string;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  visibility: number;
  pressure: number;
  tempMin: number;
  tempMax: number;
  icon: string;
}

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    setIsLoading(true);
    setError(null);
    
    // OpenWeatherMap API key (демонстрационный для тестирования)
    const API_KEY = "bd5e378503939ddaee76f12ad7a97608";
    const MOSCOW_COORDS = "lat=55.7558&lon=37.6176";
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${MOSCOW_COORDS}&appid=${API_KEY}&units=metric&lang=ru`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      const weatherData: WeatherData = {
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description,
        feelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed),
        visibility: Math.round(data.visibility / 1000), // переводим в км
        pressure: Math.round(data.main.pressure * 0.75), // переводим в мм рт. ст.
        tempMin: Math.round(data.main.temp_min),
        tempMax: Math.round(data.main.temp_max),
        icon: data.weather[0].icon,
      };
      
      setWeather(weatherData);
    } catch (err) {
      console.error('Weather fetch error:', err);
      setError('Не удалось загрузить данные о погоде');
      
      // Fallback к демо-данным при ошибке
      const temp = Math.floor(Math.random() * 20) - 5;
      const fallbackWeather: WeatherData = {
        temperature: temp,
        description: temp > 10 ? "ясно" : temp > 0 ? "облачно" : "снег",
        feelsLike: temp - 2,
        humidity: Math.floor(Math.random() * 40) + 60,
        windSpeed: Math.floor(Math.random() * 8) + 2,
        visibility: Math.floor(Math.random() * 5) + 15,
        pressure: Math.floor(Math.random() * 20) + 740,
        tempMin: temp - 3,
        tempMax: temp + 3,
        icon: "01d",
      };
      setWeather(fallbackWeather);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return {
    weather,
    isLoading,
    error,
    refetch: fetchWeather,
  };
};
