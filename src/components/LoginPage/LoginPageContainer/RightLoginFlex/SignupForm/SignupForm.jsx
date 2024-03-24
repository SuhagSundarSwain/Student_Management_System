import { FormControl, IconButton, Button } from "@mui/material";
import LoginSignupTextField from "../LoginTextField/LoginSignupTextField";
import { AccountCircle, Badge, Key, KeyOff, Phone } from "@mui/icons-material";
import { useState } from "react";

export default function SignupForm() {
  let [showPassword, setShowPassword] = useState(false);
  let name, password, email, phone;
  return (
    <FormControl sx={{ width: "40%" }}>
      <LoginSignupTextField
        type="text"
        label="Name"
        placeholder="Enter your Name"
        errorMessage=""
        icon={<Badge />}
        error={false}
        onChange={(value) => (name = value)}
      />
      <LoginSignupTextField
        type="text"
        label="Email/User ID"
        placeholder="Enter your Email or User ID"
        errorMessage=""
        icon={<AccountCircle />}
        error={false}
        onChange={(value) => (email = value)}
      />
      <LoginSignupTextField
        type="text"
        label="Phone"
        placeholder="Enter your Phone Number"
        errorMessage=""
        icon={<Phone />}
        error={false}
        onChange={(value) => (phone = value)}
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
        onChange={(value) => (password = value)}
      />{" "}
      <Button
        variant="contained"
        onClick={() => signUp(name, phone, email, password)}
      >
        Signup
      </Button>
    </FormControl>
  );
}

function signUp(name, phone, email, password) {
  console.log(name, phone, email, password);
}
