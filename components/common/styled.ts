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

export const CampaignWrapper = styled.div`
  background-color: #e6f7fb;
  color: #3096b4;
  border: 1px solid #3096b4;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 1em;
  box-shadow: 0 2px 4px rgba(48, 150, 180, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #d0edf3;
    box-shadow: 0 4px 8px rgba(48, 150, 180, 0.2);
  }
`;
