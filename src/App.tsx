import React from "react";
import styled from "styled-components";
import Weather from "./components/Weather";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <MainContainer>
      <Weather />
    </MainContainer>
  );
};

export default App;
