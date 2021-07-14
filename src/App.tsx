import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WeatherInfo from "./components/WeatherInfo";
import Dropdown from "./components/Dropdown";
import { getCityWeather } from "./api";
import { WeatherData } from "./types";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border: #333333 solid 1px;
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10%;
  border-top: rgba(0, 0, 0, 0.2) solid 1px;
`;

const options = ["Brisbane", "Sydney", "Melbourne"];

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined
  );
  const [city, setCity] = useState(options[0]);

  useEffect(() => {
    setWeatherData(undefined);
    getCityWeather(city)
      .then((res) => {
        setWeatherData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city, setWeatherData]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  }, []);

  return (
    <MainContainer>
      <Dropdown curOption={city} options={options} setCurOption={setCity} />
      <WeatherContainer>
        {weatherData ? (
          <WeatherInfo
            temperature={weatherData.temperature}
            weather={weatherData.description}
            iconUrl={weatherData.iconUrl}
          />
        ) : (
          <div>Loading weather...</div>
        )}
      </WeatherContainer>
    </MainContainer>
  );
};

export default App;
