import { css } from 'styled-components';

const shadows = {
  1: '0px 1px 2px rgba(0, 0, 0, 0.25) !important;',
  2: '0px 2px 8px rgba(0, 0, 0, 0.25) !important;',
  3: '0px 4px 16px rgba(0, 0, 0, 0.25) !important;',
  4: '0px 12px 24px rgba(0, 0, 0, 0.25) !important;',
};

const shadow = css`
  ${({ shadow }) => shadow && `box-shadow: ${shadows[shadow]};`}
`;

export default shadow;
