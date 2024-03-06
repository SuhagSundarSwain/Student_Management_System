import { Button, InputAdornment, TextField } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';

export default function RightSideLogInPage() {
    return (
        <div className="right_side_login_page">
            <h1><u>HomeWay</u></h1>
            <h5>Welcome Back!!</h5>
            <h3>Log In</h3>
            <form>
                
                <TextField
                    required
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleIcon/>
                            </InputAdornment>
                        ),
                    }}
                    label="Email"
                    placeholder="Enter your email or userId"
                    margin="normal"
                    size="small"
                />
                <br />
                <TextField
                    required
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <KeyIcon/>
                            </InputAdornment>
                        ),
                    }}
                    label="Password"
                    placeholder="Enter your password"
                    margin="normal"
                    size="small"
                />
                <br />
                <Button color="secondary" variant="contained">Log In</Button>
            </form>
        </div>
    );
}