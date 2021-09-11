import { useState } from "react";
import styled from "styled-components";
import { SectionHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";
import Divider from "../styledElements/Divider";
import { maxWidthLg } from "../../abstracts/Mixins";
import Highlight from "./Highlight";
import { highlightsData } from "../../data";

const Section = styled.section`
  background-color: var(--black);
`;

const Container = styled.div`
  ${maxWidthLg}
  padding: 20rem 2rem 5rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);
`;

const Highlights = () => {
  const [highlights, setHighlights] = useState(highlightsData);

  return (
    <Section>
      <Container>
        <div>
          <Divider />
          <SectionHeading light>A few highlights from our menu</SectionHeading>
          <Paragraph light>
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
