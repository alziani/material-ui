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

const DrawerNav = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0,9,255,0.65)",
            padding: "30px 10px",
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        {links.map((link, i) => (
          <List key={i}>
            <ListItemButton divider>
              <ListItemIcon>
                <ListItemText sx={{ color: "white" }}>{link} </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </List>
        ))}
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpen(true)}
      >
        {" "}
        <MenuIcon />{" "}
      </IconButton>
    </>
  );
};

export default DrawerNav;
