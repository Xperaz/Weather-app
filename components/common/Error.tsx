import React from "react";
import { ErrorWrapper } from "./styled";

const Error = ({ error }: { error: string }) => {
  return <ErrorWrapper>{error}</ErrorWrapper>;
};

export default Error;
