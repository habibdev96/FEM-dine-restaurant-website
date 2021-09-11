import { useState } from "react";
import styled from "styled-components";
import Feature from "./Feature";
import { featuresData } from "../../data";
import {
  maxWidthLg,
  sectionSpacingLg,
  headingStyles,
} from "../../abstracts/Mixins";
import bgPattern from "../../assets/patterns/pattern-curve-top-right.svg";
import bgLines from "../../assets/patterns/pattern-lines.svg";

const Section = styled.section`
  position: relative;

  .bg-pattern {
    position: absolute;
    width: 60%;
    top: 0;
    left: -43rem;
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingLg}
  position: relative;

  .tab-container {
    display: flex;
    align-items: start;
    flex-direction: column;
    position: absolute;
    gap: 5rem;
    bottom: 20%;
    right: 33%;
  }

  .bg-lines {
    position: absolute;
    z-index: 10;
    top: 15rem;
    left: 0;
    width: 20rem;
  }

  .feature-tab {
    ${headingStyles}
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-weight: 600;
    background-color: transparent;
    outline: 0;
    border: 0;
    position: relative;
    color: var(--shuttleGray);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--ebonyClay);
    }

    &.active-tab {
      color: var(--ebonyClay);

      &:nth-child(1)::before {
        left: -70%;
      }

      &:nth-child(2)::before {
        left: -85%;
      }

      &::before {
        position: absolute;
        bottom: 50%;
        left: -90%;
        content: "";
        height: 0.2rem;
        width: 10rem;
        background-color: var(--beaver);
      }
    }
  }
`;

const Features = () => {
  const [features, setFeatures] = useState(featuresData);
  const [value, setValue] = useState(0);

  const { image, title, description } = featuresData[value];

  return (
    <Section>
      <img src={bgPattern} alt="" className="bg-pattern" />
      <Container>
        <img src={bgLines} alt="" className="bg-lines" />
        <Feature image={image} title={title} description={description} />
        <div className="tab-container">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setValue(index)}
              className={`feature-tab ${index === value && "active-tab"}`}
            >
              {feature.title}
            </button>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Features;
