import React from "react";
import { InitialMessageWrapper, MessageContainer, MessageText } from "./styled";

const CampaignMessage = ({ message }: { message: string }) => {
  return (
    <InitialMessageWrapper>
      <MessageContainer>
        <MessageText>{message}</MessageText>
      </MessageContainer>
    </InitialMessageWrapper>
  );
};

export default CampaignMessage;
