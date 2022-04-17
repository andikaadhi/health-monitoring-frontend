import styled from "styled-components";
import { Div, Text } from "../../style-system/components";

const TagContainer = styled(Div).attrs({
  borderRad: 2,
})`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.backgroundColor};
  border: 3px solid ${(props) => props.borderColor};
  padding: 6px;
  ${Text} {
    color: white;
  }
`;

export default TagContainer;
