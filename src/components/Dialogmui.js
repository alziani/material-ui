import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

const Dialogmui = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button sx={{ margin: 10 }} variant="contained" onClick={handleClick}>
        Click to open{" "}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>This is my Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dialog is popup window wichi can ask user something like an
            information
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>Cancel</Button>
          <Button>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dialogmui;
