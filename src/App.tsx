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
  margin-top: 2vmin;
  border-top: rgba(0, 0, 0, 0.2) solid 1px;
`;

const options = ["Brisbane", "Sydney", "Melbourne"];

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined
  );
  const [curOption, setCurOption] = useState(options[0]);

  useEffect(() => {
    getCityWeather("Brisbane")
      .then((res) => {
        setWeatherData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setWeatherData]);

  return (
    <MainContainer>
      <Dropdown
        curOption={curOption}
        options={options}
        setCurOption={setCurOption}
      />
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
