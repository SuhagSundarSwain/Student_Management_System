import { useRef, useState, useEffect } from "react";
import { Button, FormControl, IconButton } from "@mui/material";
import { AccountCircle, Key, KeyOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { loginSignupActions } from "../../../../../store/loginSignupSlice";
import { useNavigate } from "react-router-dom";
import { userInfoActions } from "../../../../../store/userInfo";
import LoginSignupTextField from "../LoginSignupTextField/LoginSignupTextField";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loggedInStatus } = useSelector((store) => store.userInfo);
  const uidRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loginErrors, setLoginErrors] = useState({});

  useEffect(() => {
    if (loggedInStatus === true) {
      navigate("/");
    }
  }, [loggedInStatus]);

  useEffect(() => {
    dispatch(loginSignupActions.setLogin());
  }, [dispatch]);

  function handleLogin() {
    const uid = uidRef.current.value;
    const password = passwordRef.current.value;

    fetch(process.env.REACT_APP_BACKEND_SERVER+"/login", {
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
          setLoginErrors(data.errors);
        } else {
          dispatch(userInfoActions.setUserId(data));

          navigate("/");
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
        ref={uidRef}
        errorMessage={loginErrors["uid"]}
        error={!!loginErrors["uid"]}
      />
      <LoginSignupTextField
        type={showPassword ? "text" : "password"}
        label="Password"
        placeholder="Enter your Password"
        icon={
          <IconButton
            onClick={() => {
              setShowPassword((prevShowPassword) => !prevShowPassword);
            }}
          >
            {showPassword ? <Key /> : <KeyOff />}
          </IconButton>
        }
        ref={passwordRef}
        errorMessage={loginErrors["password"]}
        error={!!loginErrors["password"]}
      />
      <Button>Forgot password?</Button>
      <br />
      <Button variant="contained" onClick={handleLogin}>
        Log In
      </Button>
    </FormControl>
  );
}

export default LoginForm;
