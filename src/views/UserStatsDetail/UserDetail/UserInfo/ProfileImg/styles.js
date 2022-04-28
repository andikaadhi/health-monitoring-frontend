import styled from 'styled-components';

export const ImageContainer = styled.div`
  max-width: 120px;
  width: 30%;
`;

export const AspectRatioArea = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
`;
