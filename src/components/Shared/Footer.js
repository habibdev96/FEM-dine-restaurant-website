import styled from "styled-components";
import logo from "../../assets/logo.svg";
import Paragraph from "../styledElements/Paragraphs";
import { maxWidthLg, sectionSpacingSm } from "../../abstracts/Mixins";

const StyledFooter = styled.footer`
  background-color: var(--black);
`;

const Container = styled.div`
  ${sectionSpacingSm}
  ${maxWidthLg}
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  .logo {
    width: 15rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src={logo} alt="dine logo" className="logo" />
        <div>
          <Paragraph light footer>
            Marthwaite, Sedbergh Cumbria
          </Paragraph>
          <Paragraph light footer>
            +00 44 123 4567
          </Paragraph>
        </div>
        <div>
          <Paragraph light footer>
            Open Times
          </Paragraph>
          <Paragraph light footer>
            Mon - Fri: 09:00 AM - 10:00 PM
          </Paragraph>
          <Paragraph light footer>
            Sat - Sun: 09:00 AM - 11:30 PM
          </Paragraph>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
