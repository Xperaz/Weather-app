import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f8ff;
`;

export const SpinnerContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  animation: ${spin} 3s linear infinite;
`;

export const Spiral = styled.div`
  width: 100%;
  height: 100%;
  border: 8px solid transparent;
  border-top-color: #3096b4;
  border-radius: 50%;
  position: absolute;

  &:nth-child(1) {
    animation: ${pulse} 1.5s ease-in-out infinite;
  }

  &:nth-child(2) {
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
    border-top-color: #30b454;
    animation: ${pulse} 1.5s ease-in-out infinite 0.2s;
  }

  &:nth-child(3) {
    width: 60%;
    height: 60%;
    top: 20%;
    left: 20%;
    border-top-color: #b43030;
    animation: ${pulse} 1.5s ease-in-out infinite 0.4s;
  }
`;

export const LoadingText = styled.div`
  font-family: "Arial", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #3096b4;
  margin-top: 20px;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const ErrorWrapper = styled.div`
  background-color: #ffebee;
  color: #c62828;
  border: 1px solid #c62828;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const CityListWrapper = styled.div`
  background: linear-gradient(135deg, #41a7c4, #267d96);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  max-width: 600px;
  margin: 20px auto;
`;

export const CityListTitle = styled.p`
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 20px;
`;

export const CityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const CityWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const FavoriteCityInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 0.9em;
  background-color: rgba(255, 255, 255, 0.4);
  color: white;
  margin-top: 10px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const FavoriteCityButton = styled.button`
  width: 100%;
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 0.9em;
  background-color: rgba(255, 255, 255, 0.4);
  color: white;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;
