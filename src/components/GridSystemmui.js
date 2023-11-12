import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const GridSystemmui = () => {
  return (
    <div style={{ mergin: "50px" }}>
      <Grid sx={{ marginBottom: 20 }} container spacing={2}>
        <Grid item style={{ background: "violet" }} xs={8}>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Grid>
        <Grid item style={{ background: "blue" }} xs={4}>
          <Button variant="outlined">No Hello</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item style={{ background: "red" }} xs={8} sm={4} md={6}>
          <Button variant="outlined">Hello</Button>
        </Grid>
        <Grid item style={{ background: "yellow" }} xs={4} sm={4} md={6}>
          <Button variant="outlined">No Hello</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default GridSystemmui;
