import styled from "styled-components";
import { Div, View } from "../../style-system/components";

export const Container = styled(View).attrs({
  space: { py: 4 },
})`
  max-width: 1400px;
  margin: auto;
`;

export const Section = styled(Div).attrs({
  space: { py: 4 },
})``;
