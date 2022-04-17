import styled, { keyframes } from "styled-components";
import { View, Div } from "../../style-system/components";

export const Container = styled(View).attrs({
  space: { py: 4 },
})`
  width: 100%;
  position: relative;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ListItemAnimated = styled(Div).attrs({
  space: { py: 2 },
})`
  width: 100%;
  position: absolute;
  left: 0;
  transition: top 1.2s;
  animation: ${fadeIn} 0.7s ease-out;
`;
