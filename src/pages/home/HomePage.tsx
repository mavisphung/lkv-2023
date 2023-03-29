import React from "react";
import "./HomePage.css";
import { Center, Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

const HomePage = () => {
  return (
    <>
      <Container fluid>
        <Carousel maw={320} mx="auto" withIndicators height={200}>
          <Carousel.Slide>1</Carousel.Slide>
          <Carousel.Slide>2</Carousel.Slide>
          <Carousel.Slide>3</Carousel.Slide>
          {/* ...other slides */}
        </Carousel>
      </Container>
      <Container size="xl">
        <h1>hello world</h1>
      </Container>
    </>
  );
};

export default HomePage;
