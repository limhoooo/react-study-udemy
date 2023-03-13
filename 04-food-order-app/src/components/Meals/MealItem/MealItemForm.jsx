import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from './../../UI/Input';

const MealItemForm = props => {
    const [amountIdvalid, setAmountIdvalid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enterdAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enterdAmountNumber < 1 || enterdAmountNumber > 5) {
            return setAmountIdvalid(false);
        }
        props.onAddToCart(enterdAmountNumber);
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{ id: `amount_${Math.random()}`, type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }} />
        <button>+ Add</button>
        {!amountIdvalid && <p>please enter a vaild amount (1~5)</p>}
    </form>
};

export default MealItemForm;