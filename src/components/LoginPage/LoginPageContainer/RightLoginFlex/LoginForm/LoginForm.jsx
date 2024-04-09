import { Button, FormControl, IconButton } from "@mui/material";
// import styles from "./LoginForm.module.css";
// import { useState } from "react";
import LoginSignupTextField from "../LoginSignupTextField/LoginSignupTextField";
import { AccountCircle, Key, KeyOff } from "@mui/icons-material";
import { useReducer, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { loginSignupActions } from "../../../../../store/loginSignupSlice";
function LoginForm() {
  const dispatch = useDispatch();
  dispatch(loginSignupActions.setLogin());
  let uidElement = useRef("");
  let passwordElement = useRef("");
  let [showPassword, setShowPassword] = useState(false);
  let [loginErrors, dispatchLoginErrors] = useReducer(loginReducer, {});
  function logIn() {
    let uid = uidElement.current.value;
    let password = passwordElement.current.value;
    fetch("http://127.0.0.1:1412/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        uid,
        password,
      }),
    })
      .then((res) => {
        if (res.ok || res.status === 400) {
          return res.json();
        }
        throw new Error("Login Error!!! Something went wrong");
      })
      .then((data) => {
        if (data.errors) {
          let errorAction = {
            type: "SET_ERROR",
            errors: data.errors,
          };
          dispatchLoginErrors(errorAction);
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <FormControl sx={{ width: "40%" }}>
      <LoginSignupTextField
        type="text"
        label="User ID"
        placeholder="Enter your Email or User ID"
        icon={<AccountCircle />}
        ref={uidElement}
        errorMessage={loginErrors["uid"]}
        error={loginErrors["uid"] ? true : false}
      />
      <LoginSignupTextField
        type={showPassword ? "text" : "password"}
        label="Password"
        placeholder="Enter your Password"
        icon={
          <IconButton
            onClick={() => {
              setShowPassword(showPassword ? false : true);
            }}
          >
            {showPassword ? <Key /> : <KeyOff />}
          </IconButton>
        }
        ref={passwordElement}
        errorMessage={loginErrors["password"]}
        error={loginErrors["password"] ? true : false}
      />
      <Button>Forgot password?</Button>
      <br />
      <Button variant="contained" onClick={() => logIn()}>
        Log In
      </Button>
    </FormControl>
  );
}
export default LoginForm;

function loginReducer(state, action) {
  if (action.type === "SET_ERROR") {
    return action.errors;
  } else if (action.type === "NO_ERROR") {
    return {};
  }
  return state;
}

// function validateEmail(email) {
//   return /\S+@\S+\.\S+/.test(email);
// }
