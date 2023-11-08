import {
  Checkbox,
  Stack,
  TextField,
  Button,
  FormControlLabel,
  FormGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";

const Radiomui = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    city: "",
    password: "",
    subscribe: false,
    age: "",
    gender: "male",
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

      <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <Select
          name="age"
          value={inputs.age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ marginTop: 10 }}>
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          value={inputs.radio_grp}
          defaultValue="male"
          name="gender"
          onChange={handleChange}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <Button type="submit" variant="outlined">
        {" "}
        Submit{" "}
      </Button>
    </form>
  );
};

export default Radiomui;
