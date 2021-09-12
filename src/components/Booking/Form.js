import styled from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

const StyledForm = styled.form`
  padding: 5rem;
  transform: translateY(30rem);
  position: relative;
  z-index: 10;
  box-shadow: var(--mainShadow);
  background-color: var(--white);

  .form-control {
    margin: 2rem 0;

    &--secondary {
      display: flex;
      align-items: center;

      label {
        flex: 40%;
        font-size: 1.8rem;
      }
    }
  }

  .form-input,
  .form-submit {
    width: 100%;
  }

  .form-input {
    border: 0;
    outline: 0;
    border-bottom: 0.1rem solid var(--ebonyClay);
    padding: 2rem;
    font-size: 1.8rem;
  }

  .form-submit {
    ${headingStyles}
    position: relative;
    z-index: 10;
    text-transform: uppercase;
    padding: 2rem 4rem;
    display: inline-block;
    transition: var(--mainTransition);
    font-size: 1.4rem;
    letter-spacing: 0.3rem;
    font-weight: 600;
    cursor: pointer;
    border: 0.1rem solid var(--white);
    background-color: var(--black);
    color: var(--white);

    &:hover,
    &:focus {
      background-color: var(--white);
      color: var(--black);
      border: 0.1rem solid var(--black);
    }
  }
`;

const Form = () => {
  return (
    <StyledForm>
      <div className="form-control">
        <input type="text" className="form-input" placeholder="Name..." />
      </div>
      <div className="form-control">
        <input type="text" className="form-input" placeholder="Email..." />
      </div>
      <div className="form-control form-control--secondary">
        <label htmlFor="date">Pick a date</label>
        <input type="date" className="form-input form-input--date" id="date" />
      </div>
      <div className="form-control form-control--secondary">
        <label htmlFor="time">Pick a Time</label>
        <input type="time" className="form-input form-input--time" id="time" />
      </div>
      <div className="form-control">
        <input
          type="number"
          className="form-input number"
          placeholder="Number of people..."
          min="1"
        />
      </div>
      <input type="submit" value="Make Reservation" className="form-submit" />
    </StyledForm>
  );
};

export default Form;
