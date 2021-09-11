import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { headingStyles } from "../../abstracts/Mixins";

const Button = styled(Link)`
  ${headingStyles}
  text-transform: uppercase;
  padding: 2rem 4rem;
  display: inline-block;
  transition: var(--mainTransition);
  font-size: 1.4rem;
  letter-spacing: 0.3rem;
  font-weight: 600;

  ${({ primary }) =>
    primary &&
    css`
      color: var(--white);
      background-color: transparent;
      border: 0.1rem solid var(--white);

      &:hover,
      &:focus {
        background-color: var(--white);
        color: var(--black);
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      color: var(--white);
      background-color: var(--ebonyClay);
      border: 0.1rem solid var(--ebonyClay);

      &:hover,
      &:focus {
        background-color: var(--white);
        color: var(--black);
      }
    `}
`;

export default Button;
