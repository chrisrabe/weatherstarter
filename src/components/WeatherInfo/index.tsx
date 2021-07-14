import React from "react";
import { Container, TemperatureText, WeatherIcon, WeatherText } from "./styles";

interface WeatherInfoProps {
  temperature: number;
  weather: string;
  iconUrl: string;
}

const WeatherInfo: React.FC<WeatherInfoProps> = (props) => {
  const { temperature, weather, iconUrl } = props;

  return (
    <Container>
      <div>
        <TemperatureText>{temperature}°C</TemperatureText>
        <WeatherText>{weather}</WeatherText>
      </div>
      <div>
        <WeatherIcon src={iconUrl} alt={weather} />
      </div>
    </Container>
  );
};

export default WeatherInfo;
