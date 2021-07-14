import React from "react";
import styled from "styled-components";
import WeatherInfo from "./components/WeatherInfo";
import Dropdown from "./components/Dropdown";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border: #333333 solid 1px;
`;

const App: React.FC = () => {
  return (
    <MainContainer>
      <WeatherInfo />
      <Dropdown />
    </MainContainer>
  );
};

export default App;
