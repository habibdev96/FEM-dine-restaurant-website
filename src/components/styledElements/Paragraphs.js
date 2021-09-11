import styled from "styled-components";
import { textStyles } from "../../abstracts/Mixins";

const Paragraph = styled.p`
  ${textStyles}
  color: ${({ light }) => (light ? "var(--white)" : "var(--ebonyClay)")};
  font-size: 1.8rem;
  padding: 2rem 0;
`;

export default Paragraph;
