import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: transparent;
`;

export const StyledLogo = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
  color: #3096b4;

  @media (min-width: 475px) {
    font-size: 2em;
  }
`;

export const StyledInput = styled.input`
  padding: 0.6rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  outline: none;
  width: 200px;
  font-size: 1.1em;
  font-weight: 500;

  @media (min-width: 600px) {
    width: 300px;
  }

  @media (min-width: 1200px) {
    width: 400px;
  }
`;

export const StyledInputWrapper = styled.div`
  position: relative;
`;
