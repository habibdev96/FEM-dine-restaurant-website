import styled, { css } from "styled-components";
import { textStyles } from "../../abstracts/Mixins";

const Paragraph = styled.p`
  ${textStyles}

  ${({ hero }) =>
    hero &&
    css`
      font-size: 1.8rem;
      color: var(--white);
      padding: 2rem 0;
    `}
`;

export default Paragraph;
