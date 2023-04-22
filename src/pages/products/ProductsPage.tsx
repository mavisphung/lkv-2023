import { Carousel } from "@mantine/carousel";
import {
  Button,
  Container,
  createStyles,
  Grid,
  Group,
  Paper,
  rem,
  Text,
  Title,
  Accordion,
  useMantineTheme,
  Box,
} from "@mantine/core";
import { clamp, useElementSize, useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Outlet } from "react-router-dom";
import { ProductCard } from "../../components/utilities/ProductCard";
import { products } from "./data";

const useStyles = createStyles((theme) => ({
  btn: {
    top: 0,
  },
  btn_container: {
    display: "absolute",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: theme.colors.gray[0],
  },
  product_list: {},
}));

type CategoryItem = {
  id: number;
  url: string;
  title: string;
  description: string;
  subItems: string[];
};

const categories: CategoryItem[] = [
  {
    id: 0,
    url: "https://th.bing.com/th/id/R.d6e89700bd802623f844207797645fd7?rik=lRrGB9T7YPdizw&pid=ImgRaw&r=0",
    title: "Eke máy lạnh",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore.",
    subItems: ["1HP", "1.5HP", " 2HP", "2.5HP", "Chân ke"],
  },
  {
    id: 1,
    url: "https://i.redd.it/vfmw47mzc6g21.jpg",
    title: "Pas đa năng đầu lạnh",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore.",
    subItems: ["Pas giường", "Pas đồng tiền"],
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    title: "Máy biến áp",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore.",
    subItems: ["Bánh xe nhựa", "Cờ lê / chìa khóa miệng"],
  },
];

const ProductsPage = () => {
  const { classes } = useStyles();
  const autoplay = React.useRef(Autoplay({ delay: 10 * 1000, jump: true }));
  const { ref, width, height } = useElementSize();
  const theme = useMantineTheme();
  let mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <>
      <Container size="xl" ref={ref}>
        <Grid gutter={rem(14)}>
          <Grid.Col>
            <Carousel
              mx="auto"
              withIndicators
              withControls={false}
              draggable={false}
              loop={true}
              plugins={[autoplay.current]}
            >
              {categories.map((el, idx) => (
                <Carousel.Slide key={el.title + idx}>
                  <Paper
                    p="xl"
                    sx={{
                      backgroundImage: `url(${el.url})`,
                      height: width / 3,
                    }}
                    className={classes.card}
                  >
                    <div>
                      <Title order={1}>{el.title}</Title>
                      <Text size="sm">{el.description}</Text>
                    </div>
                    <Button variant="white" color="dark">
                      Xem chi tiết
                    </Button>
                  </Paper>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Grid.Col>
          {/* Filters go here */}
          <Grid.Col sm={12} md={3}>
            <Accordion>
              {categories.map((el, idx) => (
                <Accordion.Item value={el.title}>
                  <Accordion.Control>{el.title}</Accordion.Control>
                  <Accordion.Panel>
                    {el.subItems.map((sub) => (
                      <Text>{sub}</Text>
                    ))}
                  </Accordion.Panel>
                  {/* <Link
                    to={AppRoutes.products + "/" + el.id}
                    key={el.id}
                    style={{ display: "block" }}
                  > */}

                  {/* </Link> */}
                </Accordion.Item>
              ))}
            </Accordion>
          </Grid.Col>
          <Outlet />
          {/* Products list goes here */}
          <Grid.Col
            // xs={12}
            // sm={8}
            // md={9}
            // lg={9}
            span="auto"
            className={classes.product_list}
            sx={{ backgroundColor: "red" }}
          >
            <Grid>
              {products.map(
                (el, idx) => (
                  // <Grid.Col span={"content"} >
                  /* sx={{ backgroundColor: "blue" }}> */
                  /* not responsive yet*/
                  // ----------------------------
                  // <Box sx={{ marginBottom: "1rem" }}>
                  //   <ProductCard
                  //     width={
                  //       mobile ? width / 2 - 10 : width / 5 - 10 * 3
                  //     } /*clamp(value: number, min: number, max: number)*/
                  //     {...el}
                  //     key={el.name + idx}
                  //   />
                  // </Box>
                  // ----------------------------
                  <Grid.Col sm={6} md={4} lg={3} key={el.name + idx}>
                    <ProductCard {...el} />
                  </Grid.Col>
                )
                /* </Grid.Col> */
              )}
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default ProductsPage;
