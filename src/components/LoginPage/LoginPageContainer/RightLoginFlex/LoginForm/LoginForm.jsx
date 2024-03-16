import { Button, FormControl, IconButton } from "@mui/material";
// import styles from "./LoginForm.module.css";
// import { useState } from "react";
import LoginTextField from "./LoginTextField/LoginTextField";
import { AccountCircle, Key, KeyOff } from "@mui/icons-material";
import { useState } from "react";
function LoginForm() {
  // let [userId, setUserId] = useState("");
  let [userID, setUserId] = useState("h@w.c");
  let password = "";
  let [showPassword, setShowPassword] = useState(false);
  function logIn() {
    setUserId(userID);
    if (validateEmail(userID)) {
      console.log("user id : " + userID + "\npassword : " + password);
    }
  }
  return (
    <FormControl sx={{ width: "40%" }}>
      <LoginTextField
        type="text"
        label="User ID"
        placeholder="Enter your Email or User ID"
        errorMessage={validateEmail(userID) ? "" : "Enter a valid User ID"}
        icon={<AccountCircle />}
        error={validateEmail(userID) ? false : true}
        onChange={(uid) => (userID = uid)}
      />
      <LoginTextField
        type={showPassword ? "text" : "password"}
        label="Password"
        placeholder="Enter your Password"
        errorMessage="please enter correct Password"
        icon={
          <IconButton
            onClick={() => {
              setShowPassword(showPassword ? false : true);
            }}
          >
            {showPassword ? <Key /> : <KeyOff />}
          </IconButton>
        }
        onChange={(pass) => (password = pass)}
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

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
