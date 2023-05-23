import React from "react";
import { Carousel } from "@mantine/carousel";
import {
  Container,
  Grid,
  Image,
  Text,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import pas_chu_z from "../../assets/images/pas_chu_z.svg";
import pas_dong_tien from "../../assets/images/pas_dong_tien.svg";
import pas_chu_m from "../../assets/images/pas_chu_m.svg";
import pas_chu_l from "../../assets/images/pas_chu_L.svg";
import { Helmet } from "react-helmet";

// const CONTENT_PADDING = rem(56);

const useStyles = createStyles((theme) => ({
  section__container: {
    // paddingTop: CONTENT_PADDING,
    // paddingBottom: CONTENT_PADDING,
    [theme.fn.smallerThan("md")]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  section__title__2: {
    textAlign: "end",
    [theme.fn.smallerThan("md")]: {
      textAlign: "start",
      marginTop: rem(32),
    },
  },
  section__content__2: {
    textAlign: "end",
    [theme.fn.smallerThan("md")]: {
      textAlign: "start",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
  services__carousel: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

// const googleDrive = "https://drive.google.com/uc?export=view&id=";

const imageServices: { url: string; caption: string; alt?: string }[] = [
  {
    url: pas_chu_z,
    caption: "Pas chữ Z",
  },
  {
    url: pas_dong_tien,
    caption: "Pas đồng tiền",
  },
  {
    url: pas_chu_m,
    caption: "Pas chữ M",
  },
  {
    url: pas_chu_l,
    caption: "Pas chữ L",
  }
];

const AboutPage = () => {
  const { classes } = useStyles();
  const autoplay = React.useRef(Autoplay({ delay: 10 * 1000, jump: true }));

  return (
    <Container size="xl">
      <Helmet>
        <title>Giới thiệu - LKV</title>
      </Helmet>
      {/* Section 1 */}
      <Grid pt="0" className={`${classes.section__container}`}>
        <Grid.Col
          md={6}
          xl={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Title order={5}>Giới thiệu</Title>
            <Text>
              Công ty TNHH Long Khánh Vinh (LKV) là một công ty chuyên sản xuất
              và gia công các loại pas sắt (giường, pas chữ M, pas chữ Z, ...),
              eke máy lạnh (1HP ~ 3HP) và các loại phụ kiện với chất lượng đáng
              tin cậy và giá cả phải chăng.
            </Text>
          </div>
        </Grid.Col>
        <Grid.Col md={6} offsetXl={1} xl={6}>
          {/* Image here */}
          {/* make the image fit with the col */}
          <Image
            maw="100%"
            mah="100%"
            fit="contain"
            src="https://cdn.tgdd.vn/Products/Images/9538/234421/gia-do-cuc-nong-eke-45cminox-304ad-1-org.jpg"
            withPlaceholder
            caption="Eke máy lạnh"
            placeholder={<Text align="center">Ảnh không tồn tại</Text>}
          />
        </Grid.Col>
      </Grid>
      {/* Section 2 */}
      <Grid className={classes.section__container}>
        <Grid.Col md={6} xl={6}>
          <Image
            maw="100%"
            mah="100%"
            fit="contain"
            withPlaceholder
            caption="Giá đỡ cục nóng"
            placeholder={<Text align="center">Ảnh không tồn tại</Text>}
            src="https://cdn.tgdd.vn/Products/Images/9538/234421/gia-do-cuc-nong-eke-45cminox-304ad-6-org.jpg"
          />
        </Grid.Col>
        <Grid.Col
          md={6}
          offsetXl={1}
          xl={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Title className={classes.section__title__2} order={5}>
              Liên hệ
            </Title>
            <Text className={classes.section__content__2}>
              Khách hàng có thể liên hệ với LKV bất cứ lúc nào để được tư vấn và
              giải đáp các thắc mắc liên quan đến sản phẩm thông qua hotline{" "}
              <Title display="inline-block" color="blue" underline order={5}>
                0909381333
              </Title>{" "}
              hoặc{" "}
              <Title display="inline-block" color="blue" underline order={5}>
                0772925669
              </Title>
            </Text>
          </div>
        </Grid.Col>
      </Grid>
      {/* Section 3 */}
      <Grid className={classes.section__container}>
        {/* Text content */}
        <Grid.Col
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Title mt={rem(24)} order={5}>
              Dịch vụ
            </Title>
            <Text>
              Hơn thế nữa, chúng tôi cũng cung cấp dịch vụ đặt hàng và làm theo
              yêu cầu. Với kinh nghiệm và trang thiết bị sản xuất hiện đại,
              chúng tôi có khả năng đáp ứng nhu cầu đặt hàng số lượng lớn và sản
              xuất phụ kiện theo yêu cầu của khách hàng.
            </Text>
          </div>
        </Grid.Col>
        {/* services images */}
        <Grid.Col
          xs={12}
          md={6}
          // className={classes.services__carousel}
        >
          <Carousel
            mx="auto"
            withControls={false}
            loop={true}
            plugins={[autoplay.current]}
          >
            {imageServices.map((el, index) => (
              <Carousel.Slide
                sx={{ maxWidth: "100%", height: "auto" }}
                key={new Date().getTime() + index}
              >
                <Image
                  sx={{ maxWidth: "100%", height: "auto" }}
                  caption={el.caption}
                  alt={el.alt}
                  src={el.url}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default AboutPage;
