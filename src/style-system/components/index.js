import styled from "styled-components";
import { spacing, shadow, border, typography } from "../styles";
import { fadeIn } from "../styles/animation";

export const Div = styled.div`
  box-sizing: border-box;
  ${spacing}
  ${shadow}
  ${border}
`;

export const Text = styled.p`
  ${typography}
  ${spacing}
  margin: 0;
`;

export const View = styled(Div)`
  animation: ${fadeIn} 0.5s ease-in;
`;
