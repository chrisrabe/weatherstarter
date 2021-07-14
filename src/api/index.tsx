import httpService from "service/http.service";
import config from "../config.json";
import { getWeatherData } from "./utils";
import { WeatherData } from "../types";

/**
 * Requests for weather data from openweathermap api
 * @param {string} city
 */
export const getCityWeather = async (city: string): Promise<WeatherData> => {
  const { data } = await httpService.get("/weather", {
    params: {
      q: city,
      appid: config.apiKey,
      units: "metric",
    },
  });
  return getWeatherData(data);
};
