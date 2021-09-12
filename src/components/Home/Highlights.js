import { useState } from "react";
import styled from "styled-components";
import { SectionHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";
import Divider from "../styledElements/Divider";
import {
  maxWidthLg,
  sectionSpacingLg,
  sectionSpacingSm,
} from "../../abstracts/Mixins";
import Highlight from "./Highlight";
import { highlightsData } from "../../data";
import Responsive from "../../abstracts/Responsive";

const Section = styled.section`
  background-color: var(--black);
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingLg}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);

  ${Responsive.lg`
    align-items: center;
  `}

  ${Responsive.md`
    ${sectionSpacingSm}
    grid-template-columns: 1fr;
    text-align: center;
  `}
`;

const Highlights = () => {
  const [highlights, setHighlights] = useState(highlightsData);

  return (
    <Section>
      <Container>
        <div>
          <Divider />
          <SectionHeading light data-aos="fade-up" data-aos-delay="100">
            A few highlights from our menu
          </SectionHeading>
          <Paragraph light data-aos="fade-up" data-aos-delay="200">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </Paragraph>
        </div>
        <div className="highlights">
          {highlights.map((item) => (
            <Highlight key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Highlights;
