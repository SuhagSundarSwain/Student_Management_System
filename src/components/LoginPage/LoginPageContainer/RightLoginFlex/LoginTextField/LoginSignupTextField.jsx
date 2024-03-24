import { InputAdornment, TextField } from "@mui/material";

export default function LoginSignupTextField({
  type,
  label,
  placeholder,
  errorMessage,
  icon,
  error,
  onChange,
}) {
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
      onChange={onChange ? (e) => onChange(e.target.value) : null}
    ></TextField>
  );
}