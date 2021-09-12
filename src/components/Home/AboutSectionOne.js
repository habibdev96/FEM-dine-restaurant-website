import styled from "styled-components";
import aboutImageOne from "../../assets/homepage/enjoyable-place-desktop.jpg";
import { SectionHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";
import bgPattern from "../../assets/patterns/pattern-curve-top-right.svg";
import { maxWidthLg, sectionSpacingSm } from "../../abstracts/Mixins";
import Divider from "../styledElements/Divider";
import Responsive from "../../abstracts/Responsive";

const Section = styled.section`
  position: relative;

  .bg-pattern {
    position: absolute;
    width: 60%;
    top: 25%;

    ${Responsive.md`
      width: 100%;
      top: 0;
    `}
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  padding: 20rem 2rem 0rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);

  ${Responsive.md`
    ${sectionSpacingSm}
    grid-template-columns: 1fr;
    text-align: center;
  `}

  .info {
    ${Responsive.md`
      transform: translateY(-10rem); 
    `}
  }

  .showcase {
    transform: translateY(-30rem);
    box-shadow: var(--mainShadow);

    ${Responsive.xxl`
      transform: translateY(-25rem);   
    `}

    ${Responsive.md`
      transform: translateY(-10rem); 
    `}
  }
`;

const AboutSectionOne = () => {
  return (
    <Section>
      <img src={bgPattern} alt="" className="bg-pattern" />
      <Container>
        <img
          src={aboutImageOne}
          alt="view of countryside landscape"
          className="showcase"
        />
        <div className="info">
          <Divider />
          <SectionHeading data-aos="fade-up" data-aos-delay="100">
            Enjoyable place for all the family
          </SectionHeading>
          <Paragraph data-aos="fade-up" data-aos-delay="200">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </Paragraph>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSectionOne;
