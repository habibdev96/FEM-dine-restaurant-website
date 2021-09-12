import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
  :root {
    /* colors */
    --black: hsl(0, 0%, 0%);
    --white: hsl(0, 0%, 100%);
    --beaver: hsl(27, 22%, 51%);
    --codGray: hsl(0, 0%, 7%);
    --mirage: hsl(234, 30%, 13%);
    --ebonyClay: hsl(218, 21%, 18%);
    --shuttleGray: hsl(217, 14%, 42%);
    --error: hsl(0, 43%, 50%);

    /* radius */
    --mainRadius: 1rem;

    /* grid gap */
    --gap: 10rem; 
      
    /* shadows */
    --mainShadow: 0.1rem 1rem 1.5rem rgba(0, 0, 0, .3);

    /* transitions */
    --mainTransition: all 0.3s ease-in-out;

    /* font sizes */
    --xxl: 4.5rem;
    --xl: 4rem;
    --lg: 3.5rem;
    --md: 3rem;
    --sm: 2.5rem;
    --xs: 2rem;
    --xxs: 1.6rem;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Spartan', sans-serif;
    overflow-x: hidden;
  }

  img {
    width: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input {
    font-family: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`;

export default Globals;
