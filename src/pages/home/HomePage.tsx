import React from "react";
import "./HomePage.css";
import {
  Button,
  Container,
  Grid,
  Image,
  Text,
  Title,
  createStyles,
  getStylesRef,
  rem,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { NavLink, useNavigate } from "react-router-dom";
import AppRoutes from "../../routes/Routes";
import SectionHeading from "../../components/utilities/SectionHeading";
import { ProductCard } from "../../components/ProductCard";
// import pas_chu_z from "../../assets/images/pas_chu_z.svg";
import pas_dong_tien from "../../assets/images/pas_dong_tien.svg";
import pas_chu_m from "../../assets/images/pas_chu_m.svg";
import banner from "../../assets/images/Banner.svg";
import { phoneNumber } from "../../shared";

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
  container__py: {
    padding: "4rem 0 0 0",
    [theme.fn.smallerThan("md")]: {
      padding: "2.5rem 0 0 0",
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
  categories: {
    [theme.fn.smallerThan("sm")]: {
      padding: "2.5rem 0 0 0",
    },
  },
  card_side__back: {
    ref: getStylesRef("card_side__back"),
    transform: "rotateY(180deg)",
  },
  card_side__front: {
    ref: getStylesRef("card_side__front"),
  },
  card_side: {
    ref: getStylesRef("card_side"),
    transition: "all .8s ease",
    width: "auto",
    height: "100%",
    backfaceVisibility: "hidden",
    gridArea: "1 / 1 / 1 / 1",
  },
  card: {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "100%",
    gridTemplateRows: "100%",
    [`&:hover .${getStylesRef("card_side__front")}`]: {
      transform: "rotateY(-180deg)",
    },
    [`&:hover .${getStylesRef("card_side__back")}`]: {
      transform: "rotateY(0)",
    },
  },
}));

// const categories: CategoryItem[] = [
//   {
//     url: "http://ekemaylanh.com/thumb/230x210/1/upload/product/img0151-155.JPG",
//     title: "Eke máy lạnh",
//     description: "Giá đỡ cục nóng, phụ kiện không thể thiếu cho máy lạnh.",
//   },
//   {
//     url: "http://ekemaylanh.com/thumb/230x210/1/upload/product/pas1-6885.png",
//     title: "Pas (pát) đa năng",
//     description: "Khớp nối dùng để liên kết các chi tiết với nhau.",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
//     title: "Sản phẩm khác",
//     description: "Bao gồm bánh xe nhựa, chìa khóa miệng (cờ lê), chân ke, v.v",
//   },
// ];

const HomePage = () => {
  const autoplay = React.useRef(Autoplay({ delay: 10 * 1000, jump: true }));
  const { classes } = useStyles();
  //
  // const navigate = useNavigate();

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
          <Carousel.Slide>
            <Image src={banner} />
          </Carousel.Slide>
          {/* ...other slides */}
        </Carousel>
      </Container>

      {/* Introduction section */}
      <Container ta="center" size="xl" className={classes.container__py}>
        <SectionHeading isCenter={true} content="Chúng tôi là ai" />
        <Text component="p">
          LKV vừa là cơ sở sản xuất, vừa là nhà phân phối sỉ lẻ chuyên các loại
          phụ kiện điện máy như eke máy lạnh (giá đỡ cục nóng), pas đa năng các
          loại. Ngoài ra chúng tôi nhận đặt hàng theo yêu cầu của khách hàng.
          Với đội ngũ nhân viên nhiệt tình, chuyên nghiệp, chúng tôi luôn đem
          lại cho khách hàng những sản phẩm chất lượng tốt nhất. Chúng tôi luôn
          sẵn sàng phục vụ khách hàng 24/7. Nếu bạn có bất kỳ thắc mắc nào, vui
          lòng liên hệ với chúng tôi qua số điện thoại{" "}
          <Title display="inline-block" color="blue" underline order={6}>
            0901.381.333
          </Title>
        </Text>
        <NavLink to={AppRoutes.about}>
          <Button className={classes.button}>Tìm hiểu thêm</Button>
        </NavLink>
      </Container>

      {/* Hot products */}
      <Container size="xl" className={classes.container__py}>
        <SectionHeading isCenter={true} content="Sản phẩm của chúng tôi" />
        <Grid>
          <Grid.Col sm={6} md={4} lg={3}>
            <ProductCard
              title="Eke máy lạnh"
              alt="Eke-may-lanh"
              image="https://cdn.tgdd.vn/Products/Images/9538/234421/gia-do-cuc-nong-eke-45cminox-304ad-1-org.jpg"
              contact={phoneNumber}
              badges={["1 HP", "1.5 HP", "2 HP", "2.5 HP"]}
            />
          </Grid.Col>
          <Grid.Col sm={6} md={4} lg={3}>
            <ProductCard
              title="Pát sắt"
              alt="pas-sat"
              image={pas_chu_m}
              contact={phoneNumber}
              badges={["Chữ M", "Chữ Z", "Chữ L"]}
            />
          </Grid.Col>
          <Grid.Col sm={6} md={4} lg={3}>
            <ProductCard
              title="Pát đồng tiền"
              alt="pas-dong-tien"
              image={pas_dong_tien}
              contact={phoneNumber}
              badges={["60x5/16", "7.5mm", "8.5mm"]}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;

// type CategoryItem = {
//   url: string;
//   title: string;
//   description: string;
// };
