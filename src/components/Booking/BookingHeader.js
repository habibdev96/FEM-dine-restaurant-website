import styled from "styled-components";
import { HeroHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";
import logo from "../../assets/logo.svg";
import BookingShowcase from "../../assets/booking/hero-bg-desktop.jpg";
import { maxWidthLg, sectionSpacingSm } from "../../abstracts/Mixins";
import bgLines from "../../assets/patterns/pattern-lines.svg";
import Form from "./Form";
import Responsive from "../../abstracts/Responsive";

const Header = styled.header`
  background: url(${BookingShowcase}) center center/cover no-repeat;
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);

  ${Responsive.lg`
    grid-template-columns: 1fr;
  `}

  ${Responsive.sm`
    text-align: center;
  `}

  .logo {
    width: 15rem;
    margin-bottom: 15rem;
  }

  .bg-lines {
    position: absolute;
    width: 20rem;
    top: 98%;
    left: 48%;

    ${Responsive.lg`
      top: 140%;
      left: 0%;
    `}

    ${Responsive.md`
      display: none;
    `}
  }
`;

const BookingHeader = () => {
  const scrollToTop = () => window.scrollTo(0, 0);
  scrollToTop();

  return (
    <Header>
      <Container>
        <div className="info">
          <img src={logo} alt="dine logo" className="logo" />
          <HeroHeading data-aos="fade-up">Reservations</HeroHeading>
          <Paragraph light data-aos="fade-up" data-aos-delay="100">
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </Paragraph>
        </div>
        <Form />
        <img src={bgLines} alt="" className="bg-lines" />
      </Container>
    </Header>
  );
};

export default BookingHeader;
