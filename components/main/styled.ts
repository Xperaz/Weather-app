import styled from "styled-components";

export const StyledWeatherWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledHero = styled.div`
  background-image: url("/assets/hero-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 350px; // Adjust this value as needed
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 1rem;

  box-shadow: 1px 12px 15px -5px rgba(23, 135, 150, 0.75);
  -webkit-box-shadow: 1px 12px 15px -5px rgba(23, 135, 150, 0.75);
  -moz-box-shadow: 1px 12px 15px -5px rgba(23, 135, 150, 0.75);
`;

export const LeftHeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  z-index: 10;

  // style inner h1
  h1 {
    font-size: 4em;
    color: #fff;
    font-weight: 700;
    line-height: 1;
  }

  p {
    font-size: 1.7em;
    color: #fff;
    font-weight: 400;
  }
`;

export const RightHeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  z-index: 10;

  p {
    font-size: 1.7em;
    color: #fff;
    font-weight: 400;
  }

  .day-time {
    font-size: 2em;
    font-weight: 700;
    align-self: flex-end;
  }
`;

export const StyledMainInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
`;

export const InfoDetailsWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 2rem;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const StyledInfoDetails = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #acaccb;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 25px rgba(23, 135, 150, 0.8);
  }
`;

export const InfoDetailsItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const InfoDetailsItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`;

export const InfoDetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-size: 1.2em;
    font-weight: 400;
  }
`;

export const VisibilityItem = styled.div`
  background: linear-gradient(135deg, #41a7c4, #267d96);
  border-radius: 15px;
  color: white;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 25px rgba(23, 135, 150, 0.8);
  }
`;

export const StyledForecastStats = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  border: 1px solid #acaccb;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  width: 100%;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 25px rgba(23, 135, 150, 0.8);
  }
`;
