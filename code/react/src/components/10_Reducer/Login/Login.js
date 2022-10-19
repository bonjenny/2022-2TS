import React, { useState, useEffect, useReducer, useContext } from "react";
import AuthContext from "../../../store/10_Reducer/auth-context";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  } if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  } return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  } if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  } return { value: "", isValid: false };
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
  });

  useEffect(() => { // 의존성이 없는 useEffect
    console.log('EFFECT RUNNING');
    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => { // 의존성이 있는 useEffect
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP!");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => { dispatchEmail({ type: "USER_INPUT", val: event.target.value });};
  const passwordChangeHandler = (event) => { dispatchPassword({ type: "USER_INPUT", val: event.target.value });};
  const validateEmailHandler = () => { dispatchEmail({ type: "INPUT_BLUR" }); };
  const validatePasswordHandler = () => { dispatchPassword({ type: "INPUT_BLUR" }); };
  
  const authCtx = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
          typeId="email"
          labelContent="E-Mail"
          inputValue={emailState.value}
          inputChangeHandler={emailChangeHandler}
          inputBlurHandler={validateEmailHandler}
        />
        <Input
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
          typeId="password"
          labelContent="Password"
          inputValue={passwordState.value}
          inputChangeHandler={passwordChangeHandler}
          inputBlurHandler={validatePasswordHandler}
        />
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
