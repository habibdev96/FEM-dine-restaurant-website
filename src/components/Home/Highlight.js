import styled from "styled-components";
import { HighlightHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";
import Responsive from "../../abstracts/Responsive";
import { useGlobalContext } from "../../context";

const Article = styled.article`
  display: flex;
  align-items: center;
  gap: var(--gap);
  padding: 2rem 0;
  border-bottom: 0.1rem solid hsla(27, 22%, 51%, 0.4);

  ${Responsive.lg`
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  `}

  &:nth-child(3) {
    border-bottom: none;
  }

  .image {
    position: relative;
    z-index: 5;
    width: 15rem;
  }

  .left {
    position: relative;
  }

  .line {
    position: absolute;
    z-index: 1;
    top: 2rem;
    right: -3rem;
    height: 0.1rem;
    width: 5rem;
    color: var(--beaver);
    background-color: var(--beaver);

    ${Responsive.lg`
      display: none;
    `}
  }
`;

const Highlight = ({ image, dish, description }) => {
  return (
    <Article>
      <div className="left">
        <img src={image} alt={dish} className="image" />
        <div className="line"></div>
      </div>
      <div>
        <HighlightHeading>{dish}</HighlightHeading>
        <Paragraph light highlight>
          {description}
        </Paragraph>
      </div>
    </Article>
  );
};

export default Highlight;
