import { css } from "styled-components";
import { createCssMediaQuery } from "./breakpoint";

const config = {
  type: {
    p: "padding",
    pl: "padding-left",
    pr: "padding-right",
    pt: "padding-top",
    pb: "padding-bottom",
    px: ["padding-left", "padding-right"],
    py: ["padding-top", "padding-bottom"],
    m: "margin",
    ml: "margin-left",
    mr: "margin-right",
    mt: "margin-top",
    mb: "margin-bottom",
    mx: ["margin-left", "margin-right"],
    my: ["margin-top", "margin-bottom"],
  },
  size: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
  },
};

const getSpacingCss = (type, size) => {
  const spaceName = config.type[type];
  const spaceSize = config.size[size];
  if (typeof spaceName === "string")
    return `${spaceName}: ${spaceSize} !important;`;

  // handle px, py, mx, my
  return `${spaceName[0]}: ${spaceSize} !important; ${spaceName[1]}: ${spaceSize} !important;`;
};

const getPadding = (type, value) => {
  const hasBreakpoints = typeof value === "object";
  if (!hasBreakpoints) return getSpacingCss(type, value);
  return Object.keys(value)
    .map((breakpoint) => {
      const mediaQuery = config.breakpoints[breakpoint];
      const configize = value[breakpoint];
      return createCssMediaQuery(mediaQuery, getSpacingCss(type, configize));
    })
    .join("");
};

const spacing = css`
  ${({ space }) => {
    if (!space) return null;
    const result = [];
    Object.keys(space).forEach((type) => {
      if (config.type[type]) result.push(getPadding(type, space[type]));
    });
    return result;
  }}
`;

export default spacing;
