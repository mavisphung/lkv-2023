import {
  Breadcrumbs,
  Container,
  Text,
  Title,
  createStyles,
} from "@mantine/core";
import { useEffect, useState } from "react";
import AppRoutes from "../../routes/Routes";
import { BreadcrumbItem } from "../../shared/types";
import { myBreadcrumbs } from "../../shared";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({}));

export const ServicesPage = () => {
  const { classes } = useStyles();
  const currentRoute: string = AppRoutes.services;
  const [serviceBreadcrumb, setServiceBreadcrumb] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    // copy myBreadcrumbs to a new array and add a new item with title "Dịch vụ" and href = AppRoutes.services
    const serviceBreadcrumb: BreadcrumbItem[] = [
      ...myBreadcrumbs,
      { title: "Dịch vụ", href: AppRoutes.services },
    ];
    setServiceBreadcrumb(serviceBreadcrumb);
  }, []);

  return (
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
      <Title mt="xl" order={5}>
        Các loại dịch vụ chúng tôi cung cấp
      </Title>
    </Container>
  );
};
