import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

const Listmui = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const arr = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
  ];
  return (
    <div>
      <Box>
        <List>
          <ListItem divider>
            <ListItemButton onClick={handleOpen}>
              <ListItemIcon>{">"} </ListItemIcon>
              <ListItemText primary={"Expand List"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Collapse in={open}>
          <List sx={{ width: 300, background: "grey" }}>
            {arr.map((item, indx) => {
              return (
                <ListItem key={indx} divider>
                  <ListItemButton>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </Box>
    </div>
  );
};

export default Listmui;
