import styled, { css } from "styled-components";
import { textStyles } from "../../abstracts/Mixins";

const Paragraph = styled.p`
  ${textStyles}
  color: ${({ light }) => (light ? "var(--white)" : "var(--ebonyClay)")};
  font-size: 1.8rem;
  padding: 2rem 0;

  ${({ highlight }) =>
    highlight &&
    css`
      font-size: 1.5rem;
    `}

  ${({ footer }) =>
    footer &&
    css`
      font-size: 1.6rem;
      padding: 0.5rem 0;
    `}
`;

export default Paragraph;
