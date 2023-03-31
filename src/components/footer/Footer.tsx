import { Autocomplete, Container, createStyles, Grid, Group, rem, Text } from "@mantine/core";
import "./Footer.css";
import * as React from "react";
import { myFooterContent } from "../../shared";
import { Link } from "react-router-dom";
import { TabElement } from "../../shared/types";

const useStyles = createStyles((theme) => ({
  logo: {
    color: theme.colors.blue,
    fontWeight: 800,
    marginTop: 0,
    marginBottom: `${rem(16)}`,
    lineHeight: 1
  },
  title: {
    marginBottom: `${rem(16)}`,
    fontWeight: 500,
    lineHeight: 1,
    color: theme.colors.gray[7],
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  container: {
    display: "grid",
    gridTemplateColumns: "3fr 2fr 3fr 4fr",
    padding: `${rem(64)} ${rem(24)} ${rem(32)} ${rem(24)}`,
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
  },
  groupText: {
    color: theme.colors.gray[7],
    fontSize: 16,
    fontWeight: 400,
    display: "block",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  groupLogo: {
    color: theme.colors.gray[7],
    fontSize: 16,
    fontWeight: 400,
    display: "block",
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyItems: "center",
    },

  },
  groupLink: {
    display: "block",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },

  },
  link: {
    display: "block",
    color: theme.colors.gray[7],
    fontSize: 16,
    fontWeight: 400,
    textDecoration: "none",
    '&:hover': {
      color: theme.colors.blue,
      fontWeight: 500
    }
  },
  afterFooter: {
    padding: `${rem(16)} 0 ${rem(64)} 0 `,
    borderTop: `${rem(1)} solid ${theme.colors.gray[2]}`,
    justifyContent: "space-between",
    color: theme.colors.blue,
    opacity: 0.7,
    fontSize: `${rem(12)}`,
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyItems: "center",
    },
  },
  wrapper: {
    [theme.fn.largerThan("sm")]: {
      width: rem(200)
    },
    [theme.fn.largerThan("lg")]: {
      width: "auto"
    },
  }
}));


const Footer = () => {
  const { classes } = useStyles()

  const footerComponents = myFooterContent.map((group) => {
    let titleStyle = classes.title;
    let contentStyle = classes.groupText;

    switch (group.type) {
      case ("logo"):
        titleStyle = classes.logo;
        contentStyle = classes.groupLogo;
        break;
      case ("tab"):
        contentStyle = classes.groupLink;
        break;
      default: break;
    }

    const contents = group.content.map((el, index) => {
      if (group.type === "tab") {
        return (
          <Link to={(el as TabElement).route} className={classes.link}>
            {(el as TabElement).name}</Link>
        );
      }
      return (
        <Text c="dimmed">{el.toString()}</Text>
      );
    });

    return (
      <div className={classes.wrapper}>
        <Group className={contentStyle}>
          <Text className={titleStyle}>{group.title}</Text>
          {contents}
        </Group>
      </div>

    );
  });

  return (
    <React.Fragment>
      <Container size="xl" className={classes.container}>
        {footerComponents}
      </Container>
      <Container size="xl">
        <Group className={classes.afterFooter}>
          <Text>Copyright © 2020 CÔNG TY SẢN XUẤT EKE MÁY LẠNH THÀNH ĐẠT</Text>
          <Text>Designed by 200years</Text>
        </Group>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
