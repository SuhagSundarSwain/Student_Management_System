import { Button, ButtonGroup } from "@mui/material";
import LoginForm from "./LoginForm/LoginForm";
import styles from "./RightLoginFlex.module.css";
import { useState } from "react";
import SignupForm from "./SignupForm/SignupForm";
function RightLoginFlex() {
  const [loginSignupState, setLoginSignupState] = useState("login");
  return (
    <div className={styles.right_login_flex}>
      <h1>Hello There!</h1>
      <p>{`Welcome to the ${loginSignupState} page :)`}</p>

      <ButtonGroup>
        <Button
          variant={loginSignupState === "signup" ? "contained" : "outlined"}
          onClick={() => setLoginSignupState("signup")}
        >
          SignUp
        </Button>
        <Button
          variant={loginSignupState === "login" ? "contained" : "outlined"}
          onClick={() => setLoginSignupState("login")}
        >
          LogIn
        </Button>
      </ButtonGroup>

      <br />
      {loginSignupState === "login" ? <LoginForm /> : <SignupForm />}
    </div>
  );
}
export default RightLoginFlex;
