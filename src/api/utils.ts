import { WeatherData } from "../types";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const getWeatherData = (data: any): WeatherData => {
  const rawWeather = data.weather[0];
  const iconUrl = `http://openweathermap.org/img/wn/${rawWeather.icon}@2x.png`;
  const description = rawWeather.description;
  const temperature = data.main.temp;
  return {
    iconUrl,
    description,
    temperature,
  };
};
