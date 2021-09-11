import styled from "styled-components";
import { SectionHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";
import Button from "../styledElements/Buttons";

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);

  .image {
    position: relative;
    z-index: 5;
    box-shadow: var(--mainShadow);
  }

  .info {
    margin-top: 10rem;
  }
`;

const Feature = ({ image, title, description }) => {
  return (
    <Article>
      <img src={image} alt={title} className="image" />
      <div className="info">
        <SectionHeading>{title}</SectionHeading>
        <Paragraph>{description}</Paragraph>
        <Button secondary to="/Booking">
          Book a table
        </Button>
      </div>
    </Article>
  );
};

export default Feature;
