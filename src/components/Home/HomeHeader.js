import styled from "styled-components";
import { sectionSpacingSm, maxWidthLg } from "../../abstracts/Mixins";
import logo from "../../assets/logo.svg";
import homeShowcase from "../../assets/homepage/hero-bg-desktop.jpg";
import { HeroHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";
import Button from "../styledElements/Buttons";
import Responsive from "../../abstracts/Responsive";
import homeShowcaseMobile from "../../assets/homepage/hero-bg-tablet.jpg";

const Header = styled.header`
  background: url(${homeShowcase}) center center/cover no-repeat;
  height: 90vh;

  ${Responsive.md`
    background: linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), 
    url(${homeShowcaseMobile}) center center/cover no-repeat;
  `}
`;

const Container = styled.div`
  ${sectionSpacingSm}
  ${maxWidthLg}
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${Responsive.md`
    grid-template-columns: 1fr;   
  `}

  .info {
    ${Responsive.md`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      margin-top: 5rem;
    `}
  }

  .logo {
    width: 15rem;
    margin-bottom: 15rem;

    ${Responsive.xl`
      margin-bottom: 5rem;
    `}
  }
`;

const HomeHeader = () => {
  return (
    <Header>
      <Container>
        <div className="info">
          <img src={logo} alt="dine logo" className="logo" />
          <HeroHeading>Exquisite dining since 1989</HeroHeading>
          <Paragraph light>
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </Paragraph>
          <Button primary={+true} to="/Booking">
            Book a table
          </Button>
        </div>
      </Container>
    </Header>
  );
};

export default HomeHeader;
