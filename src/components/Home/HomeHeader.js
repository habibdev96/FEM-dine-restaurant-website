import styled from "styled-components";
import { sectionSpacingSm, maxWidthLg } from "../../abstracts/Mixins";
import logo from "../../assets/logo.svg";
import homeShowcase from "../../assets/homepage/hero-bg-desktop.jpg";
import { HeroHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";
import Button from "../styledElements/Buttons";

const Header = styled.header`
  background: url(${homeShowcase}) center center/cover no-repeat;
  height: 90vh;
`;

const Container = styled.div`
  ${sectionSpacingSm}
  ${maxWidthLg}
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .logo {
    width: 15rem;
    margin-bottom: 15rem;
  }
`;

const HomeHeader = () => {
  return (
    <Header>
      <Container>
        <div>
          <img src={logo} alt="dine logo" className="logo" />
          <HeroHeading>Exquisite dining since 1989</HeroHeading>
          <Paragraph light>
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </Paragraph>
          <Button primary to="/Booking">
            Book a table
          </Button>
        </div>
      </Container>
    </Header>
  );
};

export default HomeHeader;
