import { Card, CardSection, createStyles, Group, Image, rem, Text } from "@mantine/core"
import { IconRosetteFilled } from "@tabler/icons-react"

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
  },
  sale_percent: {
    position: "absolute",
    color: theme.colors.gray[0],
    fontWeight: 500,
    left: rem(8),
    transform: 'rotate(-30deg)',
  },
  price:{
    color: theme.colors.blue
  }
  
}))

export const ProductCard = (props : any) => {
  const { classes } = useStyles()
  let width = props.width

  return <Card withBorder w={width} className={classes.card}>
    <CardSection>
      <Image height={width} src={props.imgURL[0]}></Image>
    </CardSection>
    <Group className={classes.sale_badge} >
      <IconRosetteFilled size={rem(50)}/>
      <Text className={classes.sale_percent} size={rem(14)}>-10%</Text> {/*size="clamp(0.5rem, 1vw, 0.8rem)"*/}
    </Group>

    <Text className={classes.name} fw={500} size="clamp(0.7rem, 1vw, 1rem)">
      Máy Biến Áp
    </Text>
    <Text className={classes.price} size="clamp(0.7rem, 1vw, 1rem)" >
      800.000 đ
    </Text>
  </Card>
}