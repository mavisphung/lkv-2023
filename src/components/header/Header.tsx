import {
  createStyles,
  Header as MantineHeader,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  rem,
  Button,
  Transition,
  Paper,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { myTabs } from "../../shared";
import { TabElement } from "../../shared/types";

const HEADER_HEIGHT = rem(56);

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(56),
    display: "flex",
    // justifyContent: 'space',
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    flex: "auto",
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colors.blue,
    },
    [theme.fn.smallerThan("sm")]: {
      textAlign: "end",
    },
  },
  linkActive: {
    //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    color: theme.colors.blue,
  },
  linkLabel: {
    marginLeft: rem(5),
  },
  logo: {
    marginRight: "30px",
    color: theme.colors.blue,
    fontWeight: 800,
  },
  contact: {
    color: theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,

    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
    },
    [theme.fn.largerThan("sm")]: {
      marginLeft: "auto",
    },
  },
  icon: {
    color: theme.colors.gray[7],
    marginRight: "15px",
    "&:hover": {
      color: theme.colors.blue,
    },
  },
  btn: {
    backgroundColor: "transparent",
    "&:not([data-disabled]):hover": {
      backgroundColor: "transparent",
    },
    marginLeft: "auto",
  },
  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  function a11yProps(index: number) {
    return {
      key: `simple-tab-${index}`,
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  // App bar dành cho desktop
  const desktopTabs: TabElement[] = myTabs.slice(0, -1);
  const [active, setActive] = useState<string>(desktopTabs[0].route);

  const headerComponents = (
    <>
      {desktopTabs.map((el, idx) => (
        <Link
          className={cx(classes.link, {
            [classes.linkActive]: active === el.route,
          })}
          to={el.route}
          {...a11yProps(idx)}
          onClick={(e) => {
            // e.preventDefault();
            setActive(el.route);
            close();
          }}
        >
          {el.name}
        </Link>
      ))}
      <h5 className={classes.contact}>Liên hệ: 0908 779 519</h5>
    </>
  );

  // bắt kích thước của màn hình từ md trở xuống
  // < md (ipad) thì true
  // sm là màn hình của điện thoại iphone
  return (
    <MantineHeader height={56} mb={120}>
      <Container size="xl">
        <div className={classes.inner}>
          <h3 className={classes.logo}>LKV</h3>
          <Group spacing={5} className={classes.links}>
            {headerComponents}
          </Group>

          <Button
            className={classes.btn}
            rightIcon={
              <IconSearch className={classes.icon} size="1.05rem" stroke={2} />
            }
          />

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          <Transition
            transition="pop-top-right"
            duration={200}
            mounted={opened}
          >
            {(style) => (
              <Paper className={classes.dropdown} withBorder style={style}>
                {headerComponents}
              </Paper>
            )}
          </Transition>
        </div>
      </Container>
    </MantineHeader>
  );
}
