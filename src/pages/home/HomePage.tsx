import React from "react";
import "./HomePage.css";
import {
  Badge,
  Box,
  Button,
  Card,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link, NavLink } from "react-router-dom";
import AppRoutes from "../../routes/Routes";
import SectionHeading from "../../components/utilities/SectionHeading";

const useStyles = createStyles((theme) => ({
  banner: {
    [theme.fn.smallerThan("md")]: {
      padding: "0",
    },
  },
  // responsive h2
  "h2": {
    color: theme.colors.blue,
    marginBottom: "0.5rem",
    [theme.fn.smallerThan("md")]: {
      fontSize: "1.25rem",
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: "1rem",
    },
  },
  // intro
  intro: {
    padding: "5rem 0",
    [theme.fn.smallerThan("md")]: {
      padding: "2.5rem 0",
    },
    "p": {
      padding: `0 ${rem(150)}`,
      [theme.fn.smallerThan("md")]: {
        padding: "0",
      },
    },
  },
  button: {
    marginTop: "1.5rem",
    backgroundColor: "transparent",
    color: theme.colors.blue,
    border: `1px solid`,
    borderColor: theme.colors.blue,
    "&:hover": {
      backgroundColor: "None",
      border: "none",
      color: "white",
    },
  },
}));

const cards: MyCardItem[] = [
  {
    url: "http://ekemaylanh.com/thumb/230x210/1/upload/product/img0151-155.JPG",
    title: "Eke máy lạnh",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore.",
  },
  {
    url: "http://ekemaylanh.com/thumb/230x210/1/upload/product/pas1-6885.png",
    title: "Pas đa năng đầu lạnh",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore.",
  },
  {
    url: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Máy biến áp",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore.",
  },
];

const HomePage = () => {
  const autoplay = React.useRef(Autoplay({ delay: 10 * 1000, jump: true }));
  const { classes } = useStyles();
  //
  return (
    <>
      {/* banner */}
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

      {/* Introduction section */}
      <Container ta="center" size="xl" className={classes.intro}>
        <SectionHeading isCenter={true} content="Chúng tôi là ai"/>
        <Text component="p">
          LKV vừa là cơ sở sản xuất, vừa là nhà phân phối sỉ lẻ chuyên các loại
          sản phẩm dành cho máy lạnh như eke máy lạnh (giá đỡ cục nóng) các loại
          từ 1HP cho đến 2.5HP, ốc hàn, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cupiditate a facilis dolorem doloribus ab quibusdam,
          aliquid vel quidem? Facilis recusandae ipsa libero praesentium
          perferendis deleniti qui esse officiis impedit amet.
        </Text>
        <NavLink to={AppRoutes.about}>
          <Button className={classes.button}>Tìm hiểu thêm</Button>
        </NavLink>
      </Container>

      {/* Cards */}
      <Container size="xl" px="xl">
        <SectionHeading isCenter={true} content="Danh mục sản phẩm" />
        <Grid>
          {cards.map((el, index) => (
            <Grid.Col key={el.title + index} offsetMd={index === 0 ? 1.5 : 0} xs={12} sm={4} md={3}>
              <Card withBorder>
                {/* Card.Section chỉ nên dùng để chứa image sẽ hợp lí hơn
                Vì nó không có padding/margin */}
                <Card.Section>
                  <Image src={el.url} height={rem(120)}/>
                </Card.Section>
                {/* <Group position="apart">
                  <span>đay là bên trái</span>
                  <span>đây là bên phải</span>
                </Group>
                <Text>Thời gian ơi xin hãy, làm tuyết rơi</Text>
                <Text>Xin lỗi cơn mưa vừa qua</Text> */}
                <Text fz="md" fw="bold">{el.title}</Text>
                <Text>{el.description}</Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;

type MyCardItem = {
  url: string;
  title: string;
  description: string;
};
