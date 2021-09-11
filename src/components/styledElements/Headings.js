import styled from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

export const HeroHeading = styled.h1`
  ${headingStyles}
  font-weight: 300;
  color: var(--white);
  font-size: 6.4rem;
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  color: ${({ light }) => (light ? "var(--white)" : "var(--ebonyClay)")};
  font-size: 4rem;
`;
