import React from "react";
import "./HomePage.css";
import { Center, Container } from "@mantine/core";

const HomePage = () => {
  return (
    <>
      <Container fluid>
        <div
          style={{
            width: "100%",
            height: "500px",
            backgroundColor: "red",
          }}
        >
          <Center children={<h1>Dataaa</h1>} />
        </div>
      </Container>
      <Container size="xl">
        <h1>hello world</h1>
      </Container>
    </>
  );
};

export default HomePage;
