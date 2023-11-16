import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import React, { useState } from "react";

function LoginForm() {
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const resetState = () => {
    setIsSignup(!isSignup);
    setInputs({ name: "", email: "", password: "" });
  };
  return (
    <Card sx={{ maxWidth: "400px", margin: "50px auto" }}>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography variant="h4">
            {" "}
            {isSignup ? " Sign up" : "Login"}{" "}
          </Typography>
          {isSignup && (
            <TextField
              name="name"
              type="text"
              label="Name"
              variant="outlined"
              onChange={handlChange}
              value={inputs.name}
            />
          )}
          <TextField
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            onChange={handlChange}
            value={inputs.email}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            onChange={handlChange}
            value={inputs.password}
          />
          {isSignup ? (
            <Button
              type="submit"
              variant="contained"
              endIcon={<HowToRegIcon />}
            >
              Sign Up
            </Button>
          ) : (
            <Button type="submit" variant="contained" endIcon={<LoginIcon />}>
              Login
            </Button>
          )}
          <Button onClick={resetState}>
            {" "}
            {isSignup ? "Chnage to Login" : "Chnage to Sign up"}{" "}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginForm;
