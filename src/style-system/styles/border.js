import { css } from 'styled-components';

const sizes = {
  1: '5px',
  2: '10px',
  3: '15px',
};

const setBorderRadius = ({ borderRad }) => borderRad && `border-radius: ${sizes[borderRad]};`;

const border = css`
  ${setBorderRadius}
`;

export default border;
