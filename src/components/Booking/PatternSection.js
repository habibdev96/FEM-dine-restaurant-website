import styled from "styled-components";
import bgPattern from "../../assets/patterns/pattern-curve-bottom-right.svg";

const Section = styled.section`
  .bg-pattern {
    width: 65%;
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
