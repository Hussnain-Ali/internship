import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = event => {
    if (nameInputIsValid) {
      return true

    }
  }
  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true)



  }

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}

        />
      </div>
      {nameInputIsValid && <p className="error-text">Name Must Not Be Empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
