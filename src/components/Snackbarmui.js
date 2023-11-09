import { Button, Snackbar } from "@mui/material";
import React from "react";

const Snackbarmui = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open simple snackbar</Button>

      <Snackbar
        autoHideDuration={2000}
        onClose={handleClose}
        open={open}
        message="This is a Snackbar "
      />
    </div>
  );
};

export default Snackbarmui;
