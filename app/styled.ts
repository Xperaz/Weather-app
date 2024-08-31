import styled from "styled-components";

export const PublicLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f8f8ff;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 4rem;
  }
`;
