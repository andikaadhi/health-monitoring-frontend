import React from 'react';
import { Text } from '../../style-system/components';
import BackArrowIcon from '../../icons/BackArrow';
import ButtonContainer from './styles';

function BackButton({ to }) {
  return (
    <ButtonContainer to={to}>
      <BackArrowIcon />
      <Text fontSize={4}>Back</Text>
    </ButtonContainer>
  );
}

export default BackButton;
