import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Products</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: "auto" }} onClick={() => setOpen(true)}>
        {" "}
        <MenuIcon />{" "}
      </IconButton>
    </>
  );
};

export default DrawerNav;
