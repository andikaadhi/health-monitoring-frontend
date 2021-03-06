import styled from "styled-components";
import { Div, Text } from "../../style-system/components";

export const CardContainer = styled(Div).attrs({
  borderRad: 3,
  shadow: 2,
  space: { p: 4 },
})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  ${({ isCritical }) => isCritical && `border: 2px red solid; background-color: rgba(241, 211, 37, 0.7);`}
`;

export const TagsContainer = styled(Div)`
  display: flex;
  gap: 6px;
`;

export const SensorIdText = styled(Text)`
  opacity: 0.5;
`;
