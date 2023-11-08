import { Button, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";

const Modalmui = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box position="absolute" top="50%" left="50%">
          <Typography>It is a Modal Component</Typography>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Click Me
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Modalmui;
