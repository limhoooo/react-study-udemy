import React, { useRef } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {

    return <div
        className={`${classes.control} ${props.emailValid === false ? classes.invalid : ''
            }`}
    >
        <label htmlFor={props.type}>{props.text}</label>
        <input
            ref={ref}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
        />
    </div>
});

export default Input;