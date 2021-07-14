import { getInstance } from "service/http.service";
import config from "../config.json";
import { getWeatherData } from "./utils";
import { WeatherData } from "../types";

const openWeatherService = getInstance(config.weatherApi);
const positionStackService = getInstance(config.positionStackApi);

/**
 * Requests for weather data from openweathermap api
 * @param {string} city
 */
export const getCityWeather = async (city: string): Promise<WeatherData> => {
  const { data } = await openWeatherService.get("/weather", {
    params: {
      q: city,
      appid: config.weatherApiKey,
      units: "metric",
    },
  });
  return getWeatherData(data);
};

export const getCityFromCoordinates = async (
  longitude: number,
  latitude: number
): Promise<string> => {
  const { data } = await positionStackService("/reverse", {
    params: {
      access_key: config.positionStackKey,
      query: `${latitude},${longitude}`,
    },
  });
  return data;
};
