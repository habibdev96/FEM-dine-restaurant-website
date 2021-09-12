import styled from "styled-components";
import { SectionHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";
import Button from "../styledElements/Buttons";
import Responsive from "../../abstracts/Responsive";

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);

  ${Responsive.md`
    grid-template-columns: 1fr;
    text-align: center;
  `}

  .image {
    position: relative;
    z-index: 5;
    box-shadow: var(--mainShadow);
  }

  .info {
    margin-top: 10rem;

    ${Responsive.xl`
      margin-top: 0;
    `}
  }
`;

const Feature = ({ image, title, description }) => {
  return (
    <Article>
      <img src={image} alt={title} className="image" />
      <div className="info">
        <SectionHeading>{title}</SectionHeading>
        <Paragraph>{description}</Paragraph>
        <Button secondary={+true} to="/Booking">
          Book a table
        </Button>
      </div>
    </Article>
  );
};

export default Feature;
