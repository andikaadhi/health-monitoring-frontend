import styled from "styled-components";
import { Div, Text } from "../../style-system/components";

export const LoginContainer = styled(Div).attrs({
  space: { pt: 5 },
})`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text).attrs({
  fontSize: 4,
  bold: true,
})``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
