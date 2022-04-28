import React from 'react';
import Svg from '../styles';

function BackArrowIcon() {
  return (
    <Svg
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      data-testid="KeyboardArrowLeftIcon"
    >
      <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
    </Svg>
  );
}

export default BackArrowIcon;
