import { Alert, Button } from "@mui/material";
import React, { useState } from "react";

const Alertmui = () => {
  const [open, setOpen] = useState(false);
  const handleAlert = () => {
    setOpen(true);
  };

  console.log(open);

  return (
    <div>
      <Button onClick={handleAlert}>Pres to show the Alert</Button>
      {open && (
        <Alert severity="info" onClose={() => setOpen(false)}>
          This is an Alert
        </Alert>
      )}
    </div>
  );
};

export default Alertmui;
