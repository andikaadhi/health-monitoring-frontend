import React from "react";
import { Text } from "../../style-system/components";
import TagContainer from "./styles";

const Tag = ({ color, borderColor, label, value }) => (
  <TagContainer backgroundColor={color} borderColor={borderColor}>
    <Text fontSize={1}>{label}</Text>
    <Text fontSize={4} bold>
      {value}
    </Text>
  </TagContainer>
);

export default Tag;
