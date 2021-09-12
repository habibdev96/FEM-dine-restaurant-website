import styled from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";
import Responsive from "../../abstracts/Responsive";

export const HeroHeading = styled.h1`
  ${headingStyles}
  font-weight: 300;
  color: var(--white);
  font-size: 6.4rem;

  ${Responsive.sm`
    font-size: 3.2rem;
  `}
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  color: ${({ light }) => (light ? "var(--white)" : "var(--ebonyClay)")};
  font-size: 4rem;

  ${Responsive.sm`
    font-size: 3.2rem;
  `}
`;

export const HighlightHeading = styled.h3`
  ${headingStyles}
  color: var(--white);
  font-size: 1.8rem;
`;
