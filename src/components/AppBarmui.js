import React, { useState } from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const AppBarmui = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography>Logo</Typography>
          <Button
            variant="contained"
            sx={{ marginLeft: "auto" }}
            color="warning"
          >
            Hello
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarmui;
