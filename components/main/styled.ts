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
  gap: 3rem;
  flex-wrap: wrap;
  width: 100%;
`;

export const StyledInfoDetails = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  border: 1px solid #acaccb;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
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
  gap: 4rem;
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

export const Divider = styled.div`
  border-left: 3px solid #acaccb;
  height: 80%;
  top: 10%;
  bottom: 10%;
  position: relative;
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
`;
