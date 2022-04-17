import React from "react";
import ButtonContainer from "./styles";
import { Text } from "../../../style-system/components";
import NextArrowIcon from "../../../icons/NextArrow";

const ViewDetailButton = ({ onClick }) => (
  <ButtonContainer space={{ mt: 2 }} onClick={onClick}>
    <Text>Detail</Text>
    <NextArrowIcon />
  </ButtonContainer>
);

export default ViewDetailButton;
