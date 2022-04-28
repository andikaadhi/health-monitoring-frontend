import styled, { keyframes } from 'styled-components';
import { Div } from '../../style-system/components';

export const Container = styled(Div).attrs({
  space: { mx: 4 },
})``;

export const AnimationContainer = styled.div`
  width: 100px;
  height: 100%;
  position: relative;
`;

const heartRateIn = keyframes`
  0% {
    width: 100%;
  }
  50% {
    width: 0;
  }
  100% {
    width: 0;
  }
`;

export const FadeIn = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  top: 0;
  right: 0;
  animation: ${heartRateIn} ${(props) => props.timePerBeat} linear infinite;
`;
