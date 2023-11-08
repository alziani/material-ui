import { Container } from "@mui/material";
import React from "react";

const Containermui = () => {
  return (
    <div>
      <Container sx={{ background: "green" }} maxWidth="xs">
        Hello
      </Container>
      <br />
      <Container sx={{ background: "yellow" }} maxWidth="sm">
        Hello
      </Container>
      <br />
      <Container sx={{ background: "red" }} maxWidth="md">
        Hello
      </Container>
      <br />
      <Container sx={{ background: "purple" }} maxWidth="lg">
        Hello
      </Container>
      <br />
      <Container sx={{ background: "violet" }} maxWidth="xl">
        Hello
      </Container>
    </div>
  );
};

export default Containermui;
