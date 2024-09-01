import React from "react";
import { CampaignWrapper } from "./styled";

const CampaignMessage = ({ message }: { message: string }) => {
  return <CampaignWrapper>{message}</CampaignWrapper>;
};

export default CampaignMessage;
