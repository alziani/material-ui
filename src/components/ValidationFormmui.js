import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const ValidationFormmui = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: "20px auto",
          width: "300px",
        }}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <TextField
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email) ? (
              <Typography>Email Invalid</Typography>
            ) : null
          }
          label="Email"
          {...register("email", {
            validate: (val) =>
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
          })}
        />
        <TextField
          error={Boolean(errors.password)}
          helperText={
            Boolean(errors.password) ? (
              <Typography>Min 6 characters</Typography>
            ) : null
          }
          label="Password"
          type="password"
          {...register("password", { minLength: 6, required: true })}
        />
        <Button
          disabled={Boolean(errors.email) || Boolean(errors.password)}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ValidationFormmui;
