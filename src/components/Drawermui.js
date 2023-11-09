import {
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

const arr = ["Profile", "Balance", "Logout"];

const Drawermui = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {arr.map((el, indx) => (
            <ListItemButton key={indx}>
              <ListItemText primary={el} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Drawermui;
