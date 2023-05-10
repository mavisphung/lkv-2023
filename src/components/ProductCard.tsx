import {
  BackgroundImage,
  Badge,
  Button,
  Card,
  CopyButton,
  Image,
  Text,
  Title,
  rem,
} from "@mantine/core";

export type ProductCardProps = {
  image: string;
  alt: string;
  fromPrice?: string;
  toPrice?: string;
  contact: string;
  title: string;
  badges: string[];
};

export const ProductCard = (props: ProductCardProps) => {
  const { image, alt, fromPrice, toPrice, contact, title, badges } = props;
  return (
    <Card withBorder>
      <Card.Section>
        <BackgroundImage
          maw="100%"
          h={rem(240)}
          sx={{ objectFit: "fill" }}
          src={image}
        />
      </Card.Section>
      <Title mb="xs" mt="sm" order={6}>
        {title}
      </Title>
      {badges.map((badge, idx) => (
        <Badge key={badge + idx} radius="sm">
          {badge}
        </Badge>
      ))}
      {fromPrice && toPrice ? (
        <Text mt="sm" fw={500} fz={rem(18)}>
          {fromPrice} - {toPrice}
        </Text>
      ) : undefined}
      <CopyButton value={contact}>
        {({ copied, copy }) => (
          <Button
            mt="sm"
            w="100%"
            color={copied ? "teal" : "blue"}
            onClick={copy}
          >
            {copied ? "Đã copy SĐT" : "Liên hệ"}
          </Button>
        )}
      </CopyButton>
    </Card>
  );
};
