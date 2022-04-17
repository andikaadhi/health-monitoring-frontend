export const breakpoints = {
  sm: "mobileS",
  md: "mobileM",
};

export const devices = {
  mobileS: "(min-width: 360px)",
  mobileM: "(min-width: 480px)",
};

export const createCssMediaQuery = (device, css) =>
  `@media ${devices[device]} { ${css} }`;
