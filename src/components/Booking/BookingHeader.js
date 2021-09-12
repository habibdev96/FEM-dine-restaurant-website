import styled from "styled-components";
import { HeroHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";
import logo from "../../assets/logo.svg";
import BookingShowcase from "../../assets/booking/hero-bg-desktop.jpg";
import { maxWidthLg, sectionSpacingSm } from "../../abstracts/Mixins";

const Header = styled.header`
  background: url(${BookingShowcase}) center center/cover no-repeat;
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);

  .logo {
    width: 15rem;
    margin-bottom: 15rem;
  }
`;

const BookingHeader = () => {
  return (
    <Header>
      <Container>
        <div className="info">
          <img src={logo} alt="dine logo" className="logo" />
          <HeroHeading>Reservations</HeroHeading>
          <Paragraph light>
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </Paragraph>
        </div>
      </Container>
    </Header>
  );
};

export default BookingHeader;
