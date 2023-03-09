import React, { useState, useEffect, useReducer, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const init = {
  email: '',
  password: '',
  emailValid: null,
  passwordValid: null,
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

  const emailRef = useRef();
  const passwordRef = useRef();
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
    if (!loginState.emailValid) emailRef.current.focus();
    if (!loginState.passwordValid) passwordRef.current.focus();
    props.onLogin(loginState.email, loginState.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          type='email'
          id='email'
          text='E-Mail'
          value={loginState.email}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          ref={passwordRef}
          type='password'
          id='password'
          text='Password'
          value={loginState.password}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          {/* <Button type="submit" className={classes.btn} disabled={!formIsValid}> */}
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
