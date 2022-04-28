import React from 'react';
import ButtonContainer from './styles';
import { Text } from '../../../style-system/components';
import NextArrowIcon from '../../../icons/NextArrow';

function ViewDetailButton({ onClick }) {
  return (
    <ButtonContainer space={{ mt: 2 }} onClick={onClick}>
      <Text>Detail</Text>
      <NextArrowIcon />
    </ButtonContainer>
  );
}

export default ViewDetailButton;
