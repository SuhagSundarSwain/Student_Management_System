import { useEffect, useReducer, useRef, useState } from "react";
import { FormControl, IconButton, Button } from "@mui/material";
import LoginSignupTextField from "../LoginSignupTextField/LoginSignupTextField";
import { AccountCircle, Badge, Key, KeyOff, Phone } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { loginSignupActions } from "../../../../../store/loginSignupSlice";

export default function SignUpForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginSignupActions.setSignup());
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [signUpErrors, dispatchSignUpErrors] = useReducer(signUpReducer, {});

  let nameElement = useRef("");
  let passwordElement = useRef("");
  let uidElement = useRef("");
  let phoneElement = useRef("");

  function signUp(name, phone, uid, password) {
    fetch("http://127.0.0.1:1412/signup", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        phone,
        password,
        uid,
        name,
      }),
    })
      .then((res) => {
        if (res.ok || res.status === 400) {
          return res.json();
        }
        throw new Error("Failed Signup");
      })
      .then((data) => {
        if (data.errors) {
          dispatchSignUpErrors({ type: "SET_ERRORS", errors: data.errors });
        } else {
          dispatchSignUpErrors({ type: "NO_ERRORS", errors: {} });
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <FormControl sx={{ width: "40%" }}>
      <LoginSignupTextField
        type="text"
        label="Name"
        placeholder="Enter your Name"
        errorMessage={signUpErrors["name"]}
        icon={<Badge />}
        error={!!signUpErrors["name"]}
        ref={nameElement}
      />
      <LoginSignupTextField
        type="text"
        label="Email/User ID"
        placeholder="Enter your Email or User ID"
        errorMessage={signUpErrors["uid"]}
        icon={<AccountCircle />}
        error={!!signUpErrors["uid"]}
        ref={uidElement}
      />
      <LoginSignupTextField
        type="text"
        label="Phone"
        placeholder="Enter your Phone Number"
        errorMessage={signUpErrors["phone"]}
        icon={<Phone />}
        error={!!signUpErrors["phone"]}
        ref={phoneElement}
      />
      <LoginSignupTextField
        type={showPassword ? "text" : "password"}
        label="Password"
        placeholder="Enter your Password"
        errorMessage={signUpErrors["password"]}
        error={!!signUpErrors["password"]}
        icon={
          <IconButton
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <Key /> : <KeyOff />}
          </IconButton>
        }
        ref={passwordElement}
      />
      <Button
        variant="contained"
        onClick={() =>
          signUp(
            nameElement.current?.value,
            phoneElement.current?.value,
            uidElement.current?.value,
            passwordElement.current?.value
          )
        }
      >
        Signup
      </Button>
    </FormControl>
  );
}

function signUpReducer(state, action) {
  switch (action.type) {
    case "SET_ERRORS":
      return action.errors;
    case "NO_ERRORS":
      return action.errors;
    default:
      return state;
  }
}
