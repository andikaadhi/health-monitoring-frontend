import styled from "styled-components";
import { Div, Text } from "../../../../style-system/components";

export const Container = styled(Div)`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 16px;
`;

export const Label = styled(Text).attrs({
  fontSize: 1,
  space: { pt: 2 },
})`
  opacity: 0.6;
`;

export const Value = styled(Text).attrs({
  bold: true,
  fontSize: 4,
})``;
