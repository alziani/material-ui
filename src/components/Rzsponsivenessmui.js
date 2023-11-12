import { Typography, Box } from "@mui/material";
import React from "react";

function Rzsponsivenessmui() {
  return (
    // <div>
    //   <Typography
    //     fontSize={{ xs: 10, small: 14, md: 16, lg: 20, xl: 26 }}
    //     variant="h1"
    //   >
    //     Responsive Styles
    //   </Typography>
    // </div>
    <Box
      width={{ xs: "350px", sm: "450px", md: "600px", lg: "800px" }}
      height={{ xs: "500px", sm: "500px", md: "600px", lg: "700px" }}
      bgcolor={"red"}
    ></Box>
  );
}

export default Rzsponsivenessmui;
