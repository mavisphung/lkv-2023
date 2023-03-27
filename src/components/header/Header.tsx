import { createStyles, Header as MantineHeader, Menu, Group, Center, Burger, Container, rem, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { myTabs } from '../../shared';
import { TabElement } from '../../shared/types';

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(56),
    display: 'flex',
    // justifyContent: 'space',
    alignItems: 'center',
    
  },

  links: {

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
      
    },
    flex: 'auto'
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colors.blue
    },

  },
  linkActive: {
    //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    color: theme.colors.blue
  },
  linkLabel: {
    marginLeft: rem(5),
  },
  logo: {
    marginRight: '30px',
    color: theme.colors.blue,
    fontWeight: 800

  },
  contact: {
    color: theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 600
  },
  icon: {
    color: theme.colors.gray[7],
    marginRight: '15px',
    '&:hover':{
      color: theme.colors.blue
    }
  },
  btn: {
    backgroundColor: 'transparent',
    '&:not([data-disabled]):hover': {
      backgroundColor: 'transparent',
    },
  }

}));

interface HeaderSearchProps {
  links: { link: string; label: string; links: { link: string; label: string }[] }[];
}

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
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
  const [active, setActive] = useState<string>(desktopTabs[0].route)
  // bắt kích thước của màn hình từ md trở xuống
  // < md (ipad) thì true
  // sm là màn hình của điện thoại iphone

  return (
    <MantineHeader height={56} mb={120}>
      <Container>
        <div className={classes.inner}>
          {/* <MantineLogo size={28} /> */}
          <h3 className={classes.logo}>LKV</h3>
          <Group spacing={5} className={classes.links}>
            {desktopTabs.map((el, idx) => (
              <Link className={cx(classes.link, { [classes.linkActive]: active === el.route })}
                to={el.route} {...a11yProps(idx)}
                onClick={(e) => {
                  // e.preventDefault();
                  setActive(el.route);
                }}
              >
                {el.name}
              </Link>
            ))}
          </Group>
          <Button className={classes.btn} rightIcon={<IconSearch className={classes.icon} size="1.05rem" stroke={2}/>}/>
          
          <h5 className={classes.contact}>Liên hệ:  0908 779 519</h5>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </div>
      </Container>
    </MantineHeader>
  );
}