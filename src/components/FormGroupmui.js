import {
  Checkbox,
  Stack,
  TextField,
  Button,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { useState } from "react";

const FormGroupmui = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    city: "",
    password: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack sx={{ margin: 10 }} spacing={3} direction="row">
        <TextField
          name="email"
          type={"email"}
          label="Email"
          variant="outlined"
          value={inputs.email}
          onChange={handleChange}
        />
        <TextField
          name="name"
          type={"text"}
          label="Name"
          variant="standard"
          value={inputs.name}
          onChange={handleChange}
        />
        <TextField
          name="city"
          label="city"
          variant="filled"
          value={inputs.city}
          onChange={handleChange}
        />
        <TextField
          name="password"
          type={"password"}
          placeholder="password"
          value={inputs.password}
          variant="outlined"
          onChange={handleChange}
        />
      </Stack>

      <FormGroup sx={{ margin: 10 }}>
        <FormControlLabel
          control={
            <Checkbox
              onChange={() =>
                setInputs((prev) => ({
                  ...prev,
                  subscribe: !inputs.subscribe,
                }))
              }
            />
          }
          label="Subscribe"
        />
      </FormGroup>

      <Button type="submit" variant="outlined">
        {" "}
        Submit{" "}
      </Button>
    </form>
  );
};

export default FormGroupmui;
