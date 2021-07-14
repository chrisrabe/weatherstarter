import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2vmin;
  border-top: rgba(0,0,0, 0.2) solid 1px;
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
