import { Button, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  btn: {
    backgroundColor: theme.colors.blue,
  },
}));

export const CustomPrimanyButton = (props: any) => {
  const { classes } = useStyles();
  return (
    <Button fullWidth className={classes.btn}>
      {props.title}
    </Button>
  );
};
