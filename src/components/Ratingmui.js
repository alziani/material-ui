import { Rating } from "@mui/material";
import React, { useState } from "react";

const Ratingmui = () => {
  const [value, setValue] = useState(1);
  console.log(value);
  return (
    <div style={{ margin: "30px" }}>
      <Rating
        size="large"
        precision={0.5}
        value={value}
        onChange={(e, val) => setValue(val)}
      />
    </div>
  );
};

export default Ratingmui;
