import { forwardRef } from "react";
import { InputAdornment, TextField } from "@mui/material";

const LoginSignupTextField = forwardRef(
  (
    {
      type,
      label,
      placeholder,
      errorMessage,
      icon,
      error,
      // onChange,
    },
    ref
  ) => {
    return (
      <TextField
        margin="normal"
        InputProps={{
          endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
        }}
        type={type}
        error={error}
        variant="outlined"
        label={label}
        placeholder={placeholder}
        fullWidth
        color="secondary"
        helperText={errorMessage}
        // onChange={onChange ? (e) => onChange(e.target.value) : null}
        inputRef={ref}
      ></TextField>
    );
  }
);

export default LoginSignupTextField;
