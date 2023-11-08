import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

const Menumui = () => {
  const [anchorElm, setAnchorElm] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setAnchorElm(null);
    setOpen(false);
  };
  const handleClick = (e) => {
    setAnchorElm(e.currentTarget);
    setOpen(true);
  };
  return (
    <div style={{ margin: "20px" }}>
      <Button variant="outlined" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>CV</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
        <MenuItem onClick={handleClose}>Subscribe</MenuItem>
      </Menu>
    </div>
  );
};

export default Menumui;
