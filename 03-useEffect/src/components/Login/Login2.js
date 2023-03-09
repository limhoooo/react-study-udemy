import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const init = {
  email: '',
  password: '',
  emailValid: true,
  passwordValid: true,
}
const loginReducer = (state, actions) => {
  switch (actions.type) {
    case 'EMAIL_INPUT':
      return { ...state, email: actions.value, emailValid: actions.value.includes('@') }
    case 'PASSWORD_INPUT':
      return { ...state, password: actions.value, passwordValid: actions.value.trim().length > 6 }
    case 'EMAIL_VALID':
      return { ...state, emailValid: state.email.includes('@') }
    case 'PASSWORD_VALID':
      return { ...state, passwordValid: state.password.trim().length > 6 }
    default:
      break;
  }
  return state
}
const Login = (props) => {

  const [loginState, dispatch] = useReducer(loginReducer, init);



  const [formIsValid, setFormIsValid] = useState(false);

  const { emailValid, passwordValid } = loginState;

  useEffect(() => {
    const cleanup = setTimeout(() => {
      console.log('ckckck');
      setFormIsValid(
        emailValid && passwordValid
      );
    }, 500);
    return () => {
      console.log('cleanup');
      clearTimeout(cleanup)
    }
  }, [emailValid, passwordValid])



  const emailChangeHandler = (event) => {
    dispatch({ type: 'EMAIL_INPUT', value: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    dispatch({ type: 'PASSWORD_INPUT', value: event.target.value });
  };
  const validateEmailHandler = () => {
    dispatch({ type: 'EMAIL_VALID' });
  };
  const validatePasswordHandler = () => {
    dispatch({ type: 'PASSWORD_VALID' });
  };



  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(loginState.email, loginState.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${loginState.emailValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={loginState.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${loginState.passwordValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={loginState.password}
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
