import styled from "styled-components";
import { SectionHeading } from "../styledElements/Headings";
import Button from "../styledElements/Buttons";
import bgImage from "../../assets/homepage/ready-bg-desktop.jpg";
import { sectionSpacingMd, maxWidthLg } from "../../abstracts/Mixins";

const Section = styled.section`
  background: url(${bgImage}) center center/cover no-repeat;
`;

const Container = styled.div`
  ${sectionSpacingMd}
  ${maxWidthLg}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Cta = () => {
  return (
    <Section>
      <Container>
        <SectionHeading light>Ready to make a reservation?</SectionHeading>
        <Button primary to="/Booking">
          Book a table
        </Button>
      </Container>
    </Section>
  );
};

export default Cta;
