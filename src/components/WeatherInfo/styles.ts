import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2vmin;
`;

export const TemperatureText = styled.h1`
  margin: 0;
`;

export const WeatherText = styled.p`
  margin: 0;
  opacity: 0.4;
`;

export const WeatherIcon = styled.img`
  min-height: 100px;
`;
