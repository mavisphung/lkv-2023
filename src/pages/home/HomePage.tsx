import React from "react";
import "./HomePage.css";
import { Center, Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

const HomePage = () => {
  const autoplay = React.useRef(Autoplay({ delay: 10 * 1000, jump: true }));
  return (
    <>
      <Container size="xl">
        <Carousel
          mx="auto"
          withControls={false}
          loop={true}
          plugins={[autoplay.current]}
        >
          <Carousel.Slide
            sx={{
              backgroundColor: "black",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "560px",
              }}
              about="asdas"
            >
              ádasdadsda
            </div>
          </Carousel.Slide>
          <Carousel.Slide
            sx={{
              backgroundColor: "yellow",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "560px",
              }}
              about="asdas"
            >
              This is a sketch
            </div>
          </Carousel.Slide>
          <Carousel.Slide
            sx={{
              backgroundColor: "red",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "560px",
              }}
              about="asdas"
            >
              This is a sketch
            </div>
          </Carousel.Slide>
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
