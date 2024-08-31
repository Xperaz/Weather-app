import React from "react";
import { LoaderWrapper, LoadingText, SpinnerContainer, Spiral } from "./styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <SpinnerContainer>
        <Spiral />
        <Spiral />
        <Spiral />
      </SpinnerContainer>
      <LoadingText>Loading...</LoadingText>
    </LoaderWrapper>
  );
};

export default Loader;
