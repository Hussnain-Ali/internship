import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
const MealItemForm = (props) => {
    const [amountISValid, setAmountISValid] = useState(true)
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enterAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enterAmountNumber < 1 || enterAmountNumber > 5) {
            setAmountISValid(false)
            return;
        }

        props.onAddToCart(enterAmountNumber)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='amount'
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />

            <button>+Add</button>
            {!amountISValid && <p>Please Enter a valid Amount</p>}
        </form>
    )
}

export default MealItemForm