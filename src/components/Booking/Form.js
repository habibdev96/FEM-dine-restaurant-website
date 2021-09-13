import styled from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";
import Responsive from "../../abstracts/Responsive";
import { useGlobalContext } from "../../context";

const StyledForm = styled.form`
  padding: 5rem;
  transform: translateY(30rem);
  position: relative;
  z-index: 10;
  box-shadow: var(--mainShadow);
  background-color: var(--white);

  ${Responsive.lg`
    transform: translateY(10rem);
  `}

  ${Responsive.md`
    transform: translateY(0);
    padding: 3rem;
  `}

  ${Responsive.xxs`
    padding: 2rem;
  `}

  .form-control {
    margin: 2rem 0;

    &--secondary {
      display: flex;
      align-items: center;

      ${Responsive.md`
        flex-direction: column;
        align-items: flex-start;
      `}

      & > div {
        flex: 40%;
      }

      label {
        font-size: 1.8rem;
        display: flex;
        margin-bottom: 0.5rem;
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
    padding: 2rem 0;
    margin-bottom: 1rem;
    font-size: 1.8rem;

    &.error {
      border-bottom: 0.1rem solid var(--error);
    }

    ${Responsive.sm`
      font-size: 1.5rem;
    `}
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

    ${Responsive.sm`
      letter-spacing: 0.1rem;
    `}

    &:hover,
    &:focus {
      background-color: var(--white);
      color: var(--black);
      border: 0.1rem solid var(--black);
    }
  }

  .form-message {
    ${headingStyles}
    font-size: 1.2rem;
    color: var(--error);
  }
`;

const Form = () => {
  const { handleSubmit, register, errors, onSubmit } = useGlobalContext();

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <input
          type="text"
          className={`form-input ${errors.name && "error"}`}
          placeholder="Name..."
          autoComplete="off"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <small className="form-message">name is required.</small>
        )}
      </div>
      <div className="form-control">
        <input
          type="email"
          id="email"
          name="email"
          className={`form-input ${errors.email && "error"}`}
          placeholder="Email..."
          autoComplete="off"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && (
          <small className="form-message">{errors.email.message}</small>
        )}
      </div>
      <div className="form-control form-control--secondary">
        <div>
          <label htmlFor="date">Pick a date</label>
          {errors.date && (
            <small className="form-message">this field is incomplete</small>
          )}
        </div>
        <input
          type="date"
          className={`form-input form-input--date ${errors.date && "error"}`}
          id="date"
          {...register("date", { required: true })}
        />
      </div>
      <div className="form-control form-control--secondary">
        <div>
          <label htmlFor="time">Pick a Time</label>
          {errors.time && (
            <small className="form-message">this field is incomplete</small>
          )}
        </div>
        <input
          type="time"
          className={`form-input form-input--time ${errors.time && "error"}`}
          id="time"
          {...register("time", { required: true })}
        />
      </div>
      <div className="form-control">
        <input
          type="number"
          className={`form-input ${errors.number && "error"}`}
          placeholder="Number of people..."
          min="1"
          {...register("number", { required: true })}
        />
        {errors.number && (
          <small className="form-message">number of people is required.</small>
        )}
      </div>
      <input type="submit" value="Make Reservation" className="form-submit" />
    </StyledForm>
  );
};

export default Form;
