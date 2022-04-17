import styled from "styled-components";

export const RingContainer = styled.div`
  position: relative;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RingSvg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  overflow: visible;
`;
