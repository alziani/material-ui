import React from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { IconButton } from "@mui/material";

const Iconsmui = () => {
  return (
    <div style={{ margin: "50px" }}>
      <IconButton onClick={() => alert("Clicked")}>
        <AddAPhotoIcon color="primary" />
      </IconButton>
    </div>
  );
};

export default Iconsmui;
