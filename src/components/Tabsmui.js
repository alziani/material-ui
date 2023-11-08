import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const Tabsmui = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Tabs value={value} onChange={(e, val) => setValue(val)}>
        <Tab label="First" />
        <Tab label="Second" />
        <Tab label="Third" />
      </Tabs>
    </div>
  );
};

export default Tabsmui;
