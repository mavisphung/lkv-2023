import { Carousel } from "@mantine/carousel";
import {
  Accordion,
  Avatar,
  Card,
  Container,
  createStyles,
  Grid,
  Group,
  rem,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useElementSize, useMediaQuery } from "@mantine/hooks";
import { IconCircleCheck } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CustomPrimanyButton } from "../../components/utilities/PrimaryButton";
import { ProductCard } from "../../components/utilities/ProductCard";
import AppRoutes from "../../routes/Routes";

const useStyles = createStyles((theme) => ({
  product_img: {
    margin: `clamp(1.75rem, 1vh, 2.25rem) 0 clamp(1.75rem, 1vh, 2.25rem) 0`,
  },
  img_row: {
    filter: "brightness(50%)",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  active: {
    filter: "brightness(100%)",
  },
  link: {
    textDecoration: "none",
    fontSize: rem(12),
    color: theme.colors.dark,
    fontWeight: 500,
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  breadcrumb: {
    display: "flex",
  },
  product_name: {
    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
    fontWeight: 600,
  },
  product_status: {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: rem(12),
    color: theme.colors.blue,
    border: "1px solid ",
    alignItems: "center",
    marginTop: rem(12),
    fontSize: "clamp(0.9rem, 1vw, 1rem)",
  },
  title: {
    fontWeight: 500,
  },
  wrapper: {
    paddingTop: "clamp(1.75rem, 1vh, 2.25rem)",
    paddingBottom: "clamp(1.75rem, 1vh, 2.25rem)",
  },
  price: {
    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
    color: theme.colors.blue,
  },
  related_products: {
    justifyContent: "space-between",
    marginBottom: rem(36),
  },
}));

export const products: Product[] = [
  {
    id: 0,
    name: "Máy Biến Áp Dành Cho Máy Lạnh Nội Địa",
    imgURL: [
      "https://www.offidocs.com/images/oceancovesea.jpg",
      "https://th.bing.com/th/id/R.d6e89700bd802623f844207797645fd7?rik=lRrGB9T7YPdizw&pid=ImgRaw&r=0",
      "https://i.redd.it/vfmw47mzc6g21.jpg",
      "https://th.bing.com/th/id/R.b85e773bcecc9e839a870ad2892fd11f?rik=Hzy4pwghqq7Idw&riu=http%3a%2f%2fpapers.co%2fwallpaper%2fpapers.co-mt32-full-of-water-sea-dark-bw-deep-ocean-36-3840x2400-4k-wallpaper.jpg&ehk=xfZ3IYn9iiV2RAV1XvVa50OXuDbCyGBMziGUuadU1Do%3d&risl=&pid=ImgRaw&r=0",
    ],
    categoryName: "Máy Biến Áp",
    status: "Còn hàng",
    composition: "Chưa xác định",
    country: "Chưa xác định",
    brand: "Chưa xác định",
    discription: "",
  },
  {
    id: 0,
    name: "Máy Biến Áp Dành Cho Máy Lạnh Nội Địa",
    imgURL: [
      "https://www.offidocs.com/images/oceancovesea.jpg",
      "https://th.bing.com/th/id/R.d6e89700bd802623f844207797645fd7?rik=lRrGB9T7YPdizw&pid=ImgRaw&r=0",
      "https://i.redd.it/vfmw47mzc6g21.jpg",
      "https://th.bing.com/th/id/R.b85e773bcecc9e839a870ad2892fd11f?rik=Hzy4pwghqq7Idw&riu=http%3a%2f%2fpapers.co%2fwallpaper%2fpapers.co-mt32-full-of-water-sea-dark-bw-deep-ocean-36-3840x2400-4k-wallpaper.jpg&ehk=xfZ3IYn9iiV2RAV1XvVa50OXuDbCyGBMziGUuadU1Do%3d&risl=&pid=ImgRaw&r=0",
    ],
    categoryName: "Máy Biến Áp",
    status: "Còn hàng",
    composition: "Chưa xác định",
    country: "Chưa xác định",
    brand: "Chưa xác định",
    discription: "",
  },
  {
    id: 0,
    name: "Máy Biến Áp Dành Cho Máy Lạnh Nội Địa",
    imgURL: [
      "https://www.offidocs.com/images/oceancovesea.jpg",
      "https://th.bing.com/th/id/R.d6e89700bd802623f844207797645fd7?rik=lRrGB9T7YPdizw&pid=ImgRaw&r=0",
      "https://i.redd.it/vfmw47mzc6g21.jpg",
      "https://th.bing.com/th/id/R.b85e773bcecc9e839a870ad2892fd11f?rik=Hzy4pwghqq7Idw&riu=http%3a%2f%2fpapers.co%2fwallpaper%2fpapers.co-mt32-full-of-water-sea-dark-bw-deep-ocean-36-3840x2400-4k-wallpaper.jpg&ehk=xfZ3IYn9iiV2RAV1XvVa50OXuDbCyGBMziGUuadU1Do%3d&risl=&pid=ImgRaw&r=0",
    ],
    categoryName: "Máy Biến Áp",
    status: "Còn hàng",
    composition: "Chưa xác định",
    country: "Chưa xác định",
    brand: "Chưa xác định",
    discription: "",
  },
  {
    id: 0,
    name: "Máy Biến Áp Dành Cho Máy Lạnh Nội Địa",
    imgURL: [
      "https://www.offidocs.com/images/oceancovesea.jpg",
      "https://th.bing.com/th/id/R.d6e89700bd802623f844207797645fd7?rik=lRrGB9T7YPdizw&pid=ImgRaw&r=0",
      "https://i.redd.it/vfmw47mzc6g21.jpg",
      "https://th.bing.com/th/id/R.b85e773bcecc9e839a870ad2892fd11f?rik=Hzy4pwghqq7Idw&riu=http%3a%2f%2fpapers.co%2fwallpaper%2fpapers.co-mt32-full-of-water-sea-dark-bw-deep-ocean-36-3840x2400-4k-wallpaper.jpg&ehk=xfZ3IYn9iiV2RAV1XvVa50OXuDbCyGBMziGUuadU1Do%3d&risl=&pid=ImgRaw&r=0",
    ],
    categoryName: "Máy Biến Áp",
    status: "Còn hàng",
    composition: "Chưa xác định",
    country: "Chưa xác định",
    brand: "Chưa xác định",
    discription: "",
  },
];
type Product = {
  id: number;
  name: string;
  imgURL: string[];
  categoryName: string;
  status: string;
  composition: string;
  country: string;
  brand: string;
  discription: string;
};

const ProductDetailPage = () => {
  let params = useParams<{ productId: string }>();
  let product = products.find(
    (product) => product.id.toString() === params.productId,
  );
  const navigate = useNavigate();

  const { classes, cx } = useStyles();
  const { ref, width, height } = useElementSize();
  const [imgIndex, setImgIndex] = useState(0);
  const theme = useMantineTheme();
  let mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  useEffect(() => {
    //push user to products
    if (!product) {
      navigate("..");
    }
  }, [product]);

  return (
    <>
      <Container size="xl">
        <div className={classes.breadcrumb}>
          {mobile ? (
            <Link className={classes.link} to={AppRoutes.products}>
              <Text c="dimmed">{product?.categoryName}</Text>
            </Link>
          ) : (
            <>
              <Link className={classes.link} to={AppRoutes.products}>
                <Text c="dimmed">Sản phẩm /</Text>
              </Link>
              <Link className={classes.link} to={AppRoutes.products}>
                <Text c="dimmed">{product?.categoryName} /</Text>
              </Link>
              <Text className={classes.link}>{product?.name}</Text>
            </>
          )}
        </div>
        <Grid gutter={mobile ? 0 : rem(28)}>
          <Grid.Col xs={12} sm={6} ref={ref}>
            <Avatar
              className={classes.product_img}
              src={product?.imgURL[imgIndex]}
              size={width}
              radius="md"
            />
            <Carousel
              slideGap="lg"
              slideSize={width / 4}
              align="start"
              slidesToScroll={mobile ? 1 : 2}
              controlsOffset="xs"
              controlSize={28}
              styles={{
                control: {
                  "&[data-inactive]": {
                    opacity: 0,
                    cursor: "default",
                  },
                },
              }}
              // nextControlIcon={<IconChevronRight size={16} />}
              // previousControlIcon={<IconChevronLeft size={16} />}
            >
              {product?.imgURL.map((el, idx) => (
                <Carousel.Slide>
                  <Avatar
                    key={idx}
                    src={el}
                    size={width / 5}
                    radius="sm"
                    className={cx(classes.img_row, {
                      [classes.active]: idx === imgIndex,
                    })}
                    onClick={() => setImgIndex(idx)}
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </Grid.Col>
          <Grid.Col
            xs={12}
            sm={6}
            style={{ margin: `${rem(36)} 0 ${rem(36)} 0` }}
          >
            <Text className={classes.product_name}>{product?.name}</Text>
            {/* product status */}
            {/* not responsive yet */}
            <Grid.Col xs={3} sm={4.5} xl={3} span={mobile ? 4 : 0}>
              <Card
                className={classes.product_status}
                padding="sm"
                m={0}
                mt={mobile ? "1em" : 0}
              >
                <Text>{product?.status}</Text>
                <IconCircleCheck size={rem(20)} />
              </Card>
            </Grid.Col>
            {/* brief info */}
            <Group className={classes.wrapper}>
              <Grid.Col span={mobile ? 4 : 3} className={classes.title}>
                <Text c="dimmed">Chất liệu:</Text>
                <Text c="dimmed">Xuất xứ:</Text>
                <Text c="dimmed">Thương hiệu:</Text>
              </Grid.Col>
              <Grid.Col span={4}>
                <Text>{product?.composition}</Text>
                <Text>{product?.country}</Text>
                <Text>{product?.brand}</Text>
              </Grid.Col>
            </Group>
            {/* price */}
            <Card
              children={
                <Group style={{ justifyContent: "space-evenly" }}>
                  <Text className={`${classes.price} ${classes.title}`}>
                    742.000 đ - 830.000 đ
                  </Text>
                  <Grid.Col span={3}>
                    <CustomPrimanyButton title="Liên Hệ" />
                  </Grid.Col>
                </Group>
              }
            ></Card>
            {/* discription */}
            <Group className={classes.wrapper}>
              <Text className={classes.title}>Mô tả sản phẩm</Text>
              <Text size={rem(14)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
                <br />
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Text>
            </Group>
            {/* more detail */}
            <Accordion>
              <Accordion.Item value="1">
                <Accordion.Control>Thông số kỹ thuật</Accordion.Control>
                <Accordion.Panel>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="2">
                <Accordion.Control>Thông số kỹ thuật</Accordion.Control>
                <Accordion.Panel>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
          {/* related products */}
          <Grid.Col>
            <Text className={classes.title} size={rem(20)} mt={rem(9)}>
              Sản phẩm liên quan
            </Text>
          </Grid.Col>
          <Grid.Col>
            <Group className={classes.related_products}>
              {products.map((el) => (
                <ProductCard width={width / 2 - 14} {...el} />
              ))}
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default ProductDetailPage;
