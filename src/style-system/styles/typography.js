import { css } from 'styled-components';

const fontSizes = {
  md: {
    1: '12px',
    2: '14px',
    3: '16px',
    4: '18px',
  },
  lg: {
    1: '16px',
    2: '18px',
    3: '20px',
    4: '22px',
  },
};

const setTypography = ({ fontSize = 2, level = 'md', bold }) => `
    ${fontSize && `font-size: ${fontSizes[level][fontSize]};`}
    font-weight: ${bold ? '700' : '400'};
`;

const typography = css`
  ${setTypography}
`;

export default typography;
