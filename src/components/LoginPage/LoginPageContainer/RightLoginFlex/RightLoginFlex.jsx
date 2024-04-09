import { Button, ButtonGroup } from "@mui/material";
import LoginForm from "./LoginForm/LoginForm";
import styles from "./RightLoginFlex.module.css";
import SignupForm from "./SignupForm/SignupForm";
import { useSelector, useDispatch } from "react-redux";
import { loginSignupActions } from "../../../../store/loginSignupSlice";
import { Link, Outlet } from "react-router-dom";

function RightLoginFlex() {
  const loginSignupState = useSelector((store) => store.loginSignup);
  const dispatch = useDispatch();
  const switchToSignup = () => dispatch(loginSignupActions.setSignup());
  const switchToLogin = () => dispatch(loginSignupActions.setLogin());
  return (
    <div className={styles.right_login_flex}>
      <h1>Hello There!</h1>
      <p>{`Welcome to the ${
        loginSignupState.loginPage ? "Login" : "Signup"
      } page :)`}</p>

      <ButtonGroup>
        <Link to={"/auth/login"}>
          <Button
            variant={loginSignupState.loginPage ? "contained" : "outlined"}
          >
            LogIn
          </Button>
        </Link>
        <Link to={"/auth/signup"}>
          <Button
            variant={loginSignupState.loginPage ? "outlined" : "contained"}
          >
            SignUp
          </Button>
        </Link>
      </ButtonGroup>

      <br />
      <Outlet />
    </div>
  );
}
export default RightLoginFlex;
