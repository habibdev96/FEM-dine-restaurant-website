import styled from "styled-components";
import { flexCenter, textStyles, headingStyles } from "../../abstracts/Mixins";
import logo from "../../assets/logo/habibdevgif.gif";

const Container = styled.div`
  ${flexCenter};
  flex-wrap: wrap;
  padding: 5rem 2rem 1rem 2rem;
  background-color: var(--black);

  .heading {
    ${textStyles};
    font-size: var(--xxs);
    color: var(--white);
    text-align: center;
  }

  .link {
    ${headingStyles};
    color: var(--beaver);

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .logo {
    width: 5rem;
  }
`;

const Tag = () => {
  return (
    <Container>
      <h3 className="heading">
        project for{" "}
        <a
          href="https://www.frontendmentor.io/challenges/dine-restaurant-website-yAt7Vvxt7"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          frontend mentor
        </a>{" "}
        coded by{" "}
        <a
          href="https://github.com/habibdev96"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          habibdev{" "}
        </a>
      </h3>
      <img src={logo} alt="logo" className="logo" />
    </Container>
  );
};

export default Tag;
