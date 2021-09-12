import styled from "styled-components";
import dividePattern from "../../assets/patterns/pattern-divide.svg";

const Divide = styled.img`
  width: 15rem;
  margin-bottom: 2rem;
`;

const Divider = () => {
  return <Divide src={dividePattern} data-aos="fade-up" />;
};

export default Divider;
