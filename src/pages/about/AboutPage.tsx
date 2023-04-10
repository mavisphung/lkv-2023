import { Container, Grid, Paper, Text, createStyles, rem } from "@mantine/core";

const CONTENT_PADDING = rem(56);

const useStyles = createStyles((theme) => ({
  container: {
    paddingTop: CONTENT_PADDING,
    paddingBottom: CONTENT_PADDING,
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
}));

const AboutPage = () => {
  const { classes } = useStyles();

  return (
    <Container size="xl">
      {/* Section 1 */}
      <Grid className={classes.container}>
        <Grid.Col md={6} xl={5}>
          <h3>Lời mở đầu</h3>
          <Text>
            Công ty TNHH Long Khánh Vinh (LKV) là một công ty chuyên sản xuất và
            gia công các loại pas sắt (giường, pas chữ M, pas chữ Z, ...), eke
            máy lạnh (1HP ~ 2.5HP) và các loại phụ kiện với chất lượng đáng tin
            cậy và giá cả phải chăng.
          </Text>
        </Grid.Col>
        <Grid.Col md={6} offsetXl={1} xl={6}>
          {/* Image here */}
          <div className={classes.image}>Có nước mắt đã thôi không rơi nữa</div>
        </Grid.Col>
      </Grid>
      {/* Section 2 */}
      <Grid className={classes.container}>
        <Grid.Col md={6} xl={6}>
          <div className={classes.image}>có những vết thương rồi cũng đã lành</div>
        </Grid.Col>
        <Grid.Col md={6} offsetXl={1} xl={5}>
          <Text ta="end">
            Khách hàng có thể liên hệ với LKV bất cứ lúc nào để được tư vấn và
            giải đáp các thắc mắc liên quan đến sản phẩm.
          </Text>
          {/* <Text>
            Chúng tôi cũng rất tự hào khi có thể giới thiệu thêm dịch vụ đặt
            hàng số lượng lớn và nhận làm theo yêu cầu của khách hàng tại Long
            Khánh Vinh (LKV). Với kinh nghiệm và trang thiết bị sản xuất hiện
            đại, chúng tôi có khả năng đáp ứng nhu cầu đặt hàng số lượng lớn và
            sản xuất các sản phẩm theo yêu cầu của khách hàng.
          </Text> */}
        </Grid.Col>
      </Grid>
      {/* Section 3 */}
      <Grid className={classes.container}>
        <Grid.Col xs={12} offsetMd={3} md={6}>
          <Paper
            className={classes.image}
            sx={{ textAlign: "center", justifyContent: "center" }}
          >
            <Text>
              Chúng tôi cũng rất tự hào khi có thể giới thiệu thêm dịch vụ đặt
              hàng số lượng lớn và nhận làm theo yêu cầu của khách hàng tại Long
              Khánh Vinh (LKV). Với kinh nghiệm và trang thiết bị sản xuất hiện
              đại, chúng tôi có khả năng đáp ứng nhu cầu đặt hàng số lượng lớn
              và sản xuất các sản phẩm theo yêu cầu của khách hàng.
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default AboutPage;
