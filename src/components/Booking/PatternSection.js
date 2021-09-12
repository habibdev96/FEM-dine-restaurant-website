import styled from "styled-components";
import bgPattern from "../../assets/patterns/pattern-curve-bottom-right.svg";
import { sectionSpacingLg } from "../../abstracts/Mixins";
import Responsive from "../../abstracts/Responsive";

const Section = styled.section`
  ${sectionSpacingLg}
  position: relative;

  ${Responsive.md`
    padding: 0;
  `}

  .bg-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 65%;

    ${Responsive.lg`
      width: 100%;
    `}

    ${Responsive.md`
      display: none;
    `}
  }
`;

const PatternSection = () => {
  return (
    <Section>
      <img src={bgPattern} alt="" className="bg-pattern" />
    </Section>
  );
};

export default PatternSection;
