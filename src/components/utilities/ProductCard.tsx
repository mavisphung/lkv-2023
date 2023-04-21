import {
  Card,
  CardSection,
  Container,
  createStyles,
  Group,
  Image,
  rem,
  Text,
} from "@mantine/core";
import { IconRosetteFilled } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  card:{
    "&:hover":{
      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
      transform: "scale(1.02)"
    }
  },
  name: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: rem(5),
  },
  sale_badge: {
    position: 'absolute',
    top: theme.spacing.sm,
    right: theme.spacing.sm,
    pointerEvents: 'none',
    color: theme.colors.blue,
    display: "grid",
    placeItems: "center",
  },
  sale_percent: {
    position: "absolute",
    color: theme.colors.gray[0],
    fontWeight: 500,
    transform: "rotate(-30deg)",
  },
  price: {
    color: theme.colors.blue,
  },
  
}))

export const ProductCard = (props: any) => {
  const { classes } = useStyles();
  let width = props.width;
  let priceString = Intl.NumberFormat("vi-VI", {
    style: "currency",
    currency: "VND",
  }).format(props.price);

  return (
    <Card withBorder w={width} className={classes.card}>
      <CardSection>
        <Image height={width} src={props.imgURL[0]}></Image>
      </CardSection>
      {props.discount ? (
        <Group className={classes.sale_badge}>
          <IconRosetteFilled size={rem(50)} />
          <Text className={classes.sale_percent} size={rem(14)}>
            -{props.discount}%
          </Text>
          {/*size="clamp(0.5rem, 1vw, 0.8rem)"*/}
        </Group>
      ) : (
        <Container />
      )}
      <Text
        className={classes.name}
        fw={500}
        lineClamp={1}
        size="clamp(0.7rem, 1vw, 1rem)"
        tt="capitalize"
        sx={{ display: "-webkit-box" }} // activate the lineClamp property
      >
        {props.name}
      </Text>

      <Text className={classes.price} size="clamp(0.7rem, 1vw, 1rem)">
        {priceString}
      </Text>
    </Card>
  );
};
