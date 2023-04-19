import {
  Breadcrumbs,
  Card,
  Container,
  Grid,
  Group,
  Spoiler,
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
  IconBookmark,
  IconBrandAmazon,
  IconServerCog,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  content__section: {
    marginTop: rem(20),
  },
}));

const ICON_SIZE = rem(56);

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
          <Grid.Col xs={12} md={4}>
            <Card withBorder>
              <Group>
                <ThemeIcon color="dark" variant="filled">
                  <IconBookmark size={ICON_SIZE} />
                </ThemeIcon>
                <Title order={4}>Làm theo yêu cầu</Title>
                <Text>
                  Chúng tôi có nhận gia công và thiết kế phụ kiện theo yêu cầu
                  của khách hàng
                </Text>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col xs={12} md={4}>
            <Card withBorder>
              <Group>
                <ThemeIcon color="dark" variant="filled">
                  <IconServerCog size={ICON_SIZE} />
                </ThemeIcon>
                <Title order={4}>Gia công, sản xuất</Title>
                <Text>
                  Cung cấp dịch gia công và sản xuất theo thiết kế của khách
                  hàng cung cấp
                </Text>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col xs={12} md={4}>
            <Card withBorder>
              <Group>
                <ThemeIcon color="dark" variant="filled">
                  <IconBrandAmazon size={ICON_SIZE} />
                </ThemeIcon>
                <Title order={4}>Phân phối sỉ, lẻ các loại</Title>
                <Text>
                  Cung cấp, phân phối sỉ lẻ các loại phụ kiện giá cả phải chăng
                </Text>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
