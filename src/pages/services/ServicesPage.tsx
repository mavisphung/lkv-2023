import {
  Breadcrumbs,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Space,
  Text,
  ThemeIcon,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import { useEffect, useState } from "react";
import AppRoutes from "../../routes/Routes";
import { BreadcrumbItem } from "../../shared/types";
import { myBreadcrumbs } from "../../shared";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  IconAlignBoxLeftTop,
  IconBookmark,
  IconBrandAmazon,
  IconBriefcase,
  IconProgress,
  IconServerCog,
  IconShoppingCartPlus,
  IconTruckDelivery,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  content__section: {
    marginTop: rem(20),
  },
}));

const ICON_SIZE = rem(56);
const BANNER_ORDER = 5;

export const ServicesPage = () => {
  const { classes } = useStyles();
  const currentRoute: string = AppRoutes.services;
  const [serviceBreadcrumb, setServiceBreadcrumb] = useState<BreadcrumbItem[]>(
    [],
  );

  useEffect(() => {
    // copy myBreadcrumbs to a new array and add a new item with title "Dịch vụ" and href = AppRoutes.services
    const serviceBreadcrumb: BreadcrumbItem[] = [
      ...myBreadcrumbs,
      { title: "Dịch vụ", href: AppRoutes.services },
    ];
    setServiceBreadcrumb(serviceBreadcrumb);
  }, []);

  return (
    <>
      <Container size="xl">
        {/* Breadcrumbs */}
        <Breadcrumbs mt="xs">
          {serviceBreadcrumb.map((el, index) => (
            <Link key={el.title + index} to={el.href}>
              <Text c={el.href !== currentRoute ? "dimmed" : "#1864AB"}>
                {el.title}
              </Text>
            </Link>
          ))}
        </Breadcrumbs>

        {/* Content */}
        <Grid className={classes.content__section}>
          <Grid.Col xs={12} offsetMd={3} md={6}>
            <ReactPlayer width="auto" url="https://youtu.be/e6oyMO6mT60" />
            <Text ta="center">
              Chi nhánh: 218 Hồng Bàng, Phường 12, Quận 5, Tp. Hồ Chí Minh
            </Text>
          </Grid.Col>
        </Grid>
        <Grid className={classes.content__section}>
          <Grid.Col xs={12} md="auto">
            <Card withBorder>
              <Group>
                <ThemeIcon color="dark" variant="filled">
                  <IconBookmark size={ICON_SIZE} />
                </ThemeIcon>
                <Title order={BANNER_ORDER}>Làm theo yêu cầu</Title>
                <Text>
                  Chúng tôi có nhận gia công và thiết kế phụ kiện theo yêu cầu
                  của khách hàng
                </Text>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col xs={12} md="auto">
            <Card withBorder>
              <Group>
                <ThemeIcon color="dark" variant="filled">
                  <IconServerCog size={ICON_SIZE} />
                </ThemeIcon>
                <Title order={BANNER_ORDER}>Gia công, sản xuất</Title>
                <Text>
                  Cung cấp dịch gia công và sản xuất theo thiết kế của khách
                  hàng cung cấp
                </Text>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col xs={12} md="auto">
            <Card withBorder>
              <Group>
                <ThemeIcon color="dark" variant="filled">
                  <IconBrandAmazon size={ICON_SIZE} />
                </ThemeIcon>
                <Title order={BANNER_ORDER}>Phân phối sỉ, lẻ các loại</Title>
                <Text>
                  Cung cấp, phân phối sỉ lẻ các loại phụ kiện giá cả phải chăng
                </Text>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
      <Space h="xl" />
      <Container size="xl">
        <Group>
          <ThemeIcon size={rem(24)} color="dark" variant="outline">
            <IconBriefcase size={rem(24)} />
          </ThemeIcon>
          <Title order={4}>Quy trình làm việc</Title>
          <Text c="dimmed">
            Những đơn hàng, yêu cầu sẽ được xử lí như thế nào?
          </Text>
        </Group>
        <Space h="md" />
        <Grid>
          <Grid.Col md={3}>
            <Card h={rem(144.5)}>
              <Group position="apart">
                <IconAlignBoxLeftTop size={ICON_SIZE} />
                <Button color="#1864a">Liên hệ</Button>
              </Group>
              <Title order={4}>Bước 1</Title>
              <Text>Liên hệ: 0395833593</Text>
            </Card>
          </Grid.Col>
          <Grid.Col md={3}>
            <Card>
              <IconShoppingCartPlus size={ICON_SIZE} />
              <Title order={4}>Bước 2</Title>
              <Text>Nhận đơn đặt hàng</Text>
            </Card>
          </Grid.Col>
          <Grid.Col md={3}>
            <Card>
              <IconProgress size={ICON_SIZE} />
              <Title order={4}>Bước 3</Title>
              <Text>Gia công, sản xuất</Text>
            </Card>
          </Grid.Col>
          <Grid.Col md={3}>
            <Card>
              <IconTruckDelivery size={ICON_SIZE} />
              <Title order={4}>Bước 4</Title>
              <Text>Giao hàng</Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
