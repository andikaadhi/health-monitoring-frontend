import React from "react";
import { Text } from "../../style-system/components";
import colors from "../../colors";
import { Container, AnimationContainer, FadeIn } from "./styles";

const HeartRateAnimated = ({ value }) => (
  <Container>
    <Text fontSize={1}>BPM</Text>
    <Text fontSize={4} bold>
      {value}
    </Text>
    <AnimationContainer>
      <svg
        version="1.0"
        x="0px"
        y="0px"
        width="100px"
        viewBox="0 0 150 73"
        enableBackground="new 0 0 150 73"
        xmlSpace="preserve"
      >
        <polyline
          fill="none"
          stroke={colors.red[1]}
          stroke-width="3"
          stroke-miterlimit="10"
          points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
        />
      </svg>
      <FadeIn timePerBeat={`${60 / value}s`} />
    </AnimationContainer>
  </Container>
);

export default HeartRateAnimated;
