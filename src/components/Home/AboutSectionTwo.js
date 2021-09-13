import styled from "styled-components";
import aboutImageTwo from "../../assets/homepage/locally-sourced-desktop.jpg";
import bgPattern from "../../assets/patterns/pattern-curve-top-left.svg";
import bgLines from "../../assets/patterns/pattern-lines.svg";
import { SectionHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";
import { maxWidthLg, sectionSpacingSm } from "../../abstracts/Mixins";
import Divider from "../styledElements/Divider";
import Responsive from "../../abstracts/Responsive";

const Section = styled.section`
  position: relative;
  overflow: hidden;

  .bg-pattern {
    position: absolute;
    width: 60%;
    bottom: 0;
    right: 0;
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: var(--gap);
  position: relative;

  ${Responsive.md`
    ${sectionSpacingSm}
    grid-template-columns: 1fr;
    text-align: center;
  `}

  .showcase {
    transform: translateY(10rem);
    box-shadow: var(--mainShadow);

    ${Responsive.md`
      transform: translateY(0);
    `}
  }

  .bg-lines {
    position: absolute;
    width: 20rem;
    right: -10%;
    top: 50%;
  }
`;

const AboutSectionTwo = () => {
  return (
    <Section>
      <img src={bgPattern} alt="" className="bg-pattern" />
      <Container>
        <div className="info">
          <Divider />
          <SectionHeading data-aos="fade-up" data-aos-delay="100">
            The most locally sourced food
          </SectionHeading>
          <Paragraph data-aos="fade-up" data-aos-delay="200">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </Paragraph>
        </div>
        <img
          src={aboutImageTwo}
          alt="chef preparing food"
          className="showcase"
        />
        <img src={bgLines} alt="" className="bg-lines" />
      </Container>
    </Section>
  );
};

export default AboutSectionTwo;
