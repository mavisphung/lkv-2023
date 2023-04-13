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
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { ProductCard } from "../../components/utilities/ProductCard";
import { products } from "../product-detail/ProductDetailPage";

const useStyles = createStyles((theme) => ({
  btn: {
    top: 0,
  },
  btn_container: {
    display: "absolute",
  },
  card: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: theme.colors.gray[0],
  },
  overlay: {
    top: 0,
    bottom: 0,
    left: 0,
    backgroundImage:
      "linear-gradient(-90deg, rgba(0, 0, 0, .05) 10%, rgba(0, 0, 0, .45) 90%)",
    borderRadius: rem(5),
    width: "100vw",
  },
  content: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingLeft: "5%",
  },
  product_list: {
    justifyContent: "space-between",
  },
}));

type CategoryItem = {
  url: string;
  title: string;
  description: string;
};

const categories: CategoryItem[] = [
  {
    url: "https://th.bing.com/th/id/R.d6e89700bd802623f844207797645fd7?rik=lRrGB9T7YPdizw&pid=ImgRaw&r=0",
    title: "Eke máy lạnh",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore.",
  },
  {
    url: "https://i.redd.it/vfmw47mzc6g21.jpg",
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

const ProductsPage = () => {
  const { classes } = useStyles();
  const autoplay = React.useRef(Autoplay({ delay: 10 * 1000, jump: true }));
  const { ref, width, height } = useElementSize();
  return (
    <>
      <Container size="xl" ref={ref}>
        <Grid gutter={rem(36)}>
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
                <Carousel.Slide>
                  <Paper
                    shadow="md"
                    p="xl"
                    sx={{
                      backgroundImage: `url(${el.url})`,
                      height: width / 3,
                      // backgroundBlendMode: "darken",
                    }}
                    className={classes.card}
                  >
                    <Group className={`${classes.overlay} ${classes.content}`}>
                      <div>
                        <Title order={1}>{el.title}</Title>
                        <Text size="sm">{el.description}</Text>
                      </div>
                      <Button variant="white" color="dark">
                        Xem chi tiết
                      </Button>
                    </Group>
                  </Paper>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Grid.Col>

          <Grid.Col xs={12} sm={4} md={3} lg={3}>
            <h1>Filters Go Here</h1>
          </Grid.Col>
          <Grid.Col
            xs={12}
            sm={8}
            md={9}
            lg={9}
            className={classes.product_list}
          >
            <Group>
              {products.map((el, idx) => (
                <ProductCard width={width / 5} {...el} />
              ))}
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default ProductsPage;
