import React from "react";
import { TemperatureText, WeatherIcon, WeatherText } from "./styles";

interface WeatherInfoProps {
  temperature: number;
  weather: string;
  iconUrl: string;
}

const WeatherInfo: React.FC<WeatherInfoProps> = (props) => {
  const { temperature, weather, iconUrl } = props;

  return (
    <>
      <div>
        <TemperatureText>{temperature}°C</TemperatureText>
        <WeatherText>{weather}</WeatherText>
      </div>
      <div>
        <WeatherIcon src={iconUrl} alt={weather} />
      </div>
    </>
  );
};

export default WeatherInfo;
