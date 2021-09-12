import { css } from "styled-components";

const breakpoints = {
  xxs: "350px",
  xs: "420px",
  sm: "500px",
  md: "768px",
  lg: "1000px",
  xl: "1250px",
  xxl: "1400px",
};

const Responsive = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default Responsive;
