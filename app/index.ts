import styled from "styled-components";

export const PublicLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f8f8ff;
  overflow-y: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 10px;
  }
`;
