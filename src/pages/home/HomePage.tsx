import React from "react";
import "./HomePage.css";
import { Box, Center, Container, Text, createStyles, rem } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

const useStyles = createStyles((theme) => ({
  banner: {
    [theme.fn.smallerThan("md")]: {
      padding: "0",
    },
  },
  // responsive h2
  "h2": {
    marginBottom: "0.5rem",
    [theme.fn.smallerThan("md")]: {
      fontSize: "1.25rem",
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: "1rem",
    },
  },
}));

const HomePage = () => {
  const autoplay = React.useRef(Autoplay({ delay: 10 * 1000, jump: true }));
  const { classes } = useStyles();
  //
  return (
    <>
      <Container size="xl" className={classes.banner}>
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
                height: "500px",
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
                height: "500px",
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
                height: "500px",
              }}
              about="asdas"
            >
              This is a sketch
            </div>
          </Carousel.Slide>
          {/* ...other slides */}
        </Carousel>
      </Container>
      <Container size="xl" py={rem(120)}>
        <Center ta="center" display="block">
          <h2 className={classes.h2}>Chúng tôi là ai</h2>
          <Text px={rem(250)}>
              LKV vừa là cơ sở sản xuất, vừa là nhà phân phối sỉ lẻ chuyên các
              loại sản phẩm dành cho máy lạnh như eke máy lạnh (giá đỡ cục nóng)
              các loại từ 1HP cho đến 2HP, ốc hàn, Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cupiditate a facilis dolorem
              doloribus ab quibusdam, aliquid vel quidem? Facilis recusandae
              ipsa libero praesentium perferendis deleniti qui esse officiis
              impedit amet.
            </Text>
        </Center>
      </Container>
    </>
  );
};

export default HomePage;
