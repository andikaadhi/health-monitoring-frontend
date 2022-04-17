import React from "react";
import { Text } from "../../style-system/components";
import BackArrowIcon from "../../icons/BackArrow";
import ButtonContainer from "./styles";

const BackButton = ({ to }) => (
  <ButtonContainer to={to}>
    <BackArrowIcon />
    <Text fontSize={4}>Back</Text>
  </ButtonContainer>
);

export default BackButton;
