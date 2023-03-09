import React, { useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailInit = { value: '', valid: false };
const passwordInit = { value: '', valid: false };

const emailReducer = (state, actions) => {
  if (actions.type === 'EMAIL_INPUT') {
    return { value: actions.value, valid: actions.value.includes('@') }
  }
  if (actions.type === 'EMAIL_VALID') {
    return { value: state.value, valid: state.value.includes('@') }
  }
  return state
}
const passwordReducer = (state, actions) => {
  if (actions.type === 'PASSWORD_INPUT') {
    return { value: actions.value, valid: actions.value.trim().length > 6 }
  }
  if (actions.type === 'PASSWORD_VALID') {
    return { value: state.value, valid: state.value.trim().length > 6 }
  }
  return state
}

const Login = (props) => {

  const [formIsValid, setFormIsValid] = useState(false);
  const [stateEmail, dispatchEmail] = useReducer(emailReducer, emailInit);
  const [statePassword, dispatchPassword] = useReducer(passwordReducer, passwordInit);

  // useEffect 최적화
  const { valid: emailVaild } = stateEmail;
  const { valid: passwordVaild } = statePassword;

  useEffect(() => {
    const indentifier = setTimeout(() => {
      console.log("checking!");
      setFormIsValid(
        emailVaild && passwordVaild
      );
    }, 500);

    return () => {
      console.log('cleanUp');
      clearTimeout(indentifier)
    }
  }, [emailVaild, passwordVaild])


  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'EMAIL_INPUT', value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'PASSWORD_INPUT', value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'EMAIL_VALID' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'PASSWORD_VALID' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(stateEmail.value, statePassword.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${stateEmail.value === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={stateEmail.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${statePassword.value === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={statePassword.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
