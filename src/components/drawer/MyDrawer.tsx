import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import AppRoutes from "../../routes/Routes";

const MyDrawer = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [index, setIndex] = React.useState<number>(0);

  const handleClick = (_: any, index: number) => {
    setIndex(index);
  };

  return (
    <React.Fragment>
      <Drawer open={isOpen} onClose={(ev, reason) => setIsOpen(false)}>
        <List>
          {/* --------- Home --------- */}
          <ListItem disableGutters>
            <ListItemButton
              selected={index === 0}
              onClick={(ev) => handleClick(ev, 0)}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText sx={{ textDecoration: "none" }}>
                <Link to={AppRoutes.home}>
                  <Typography>Trang chủ</Typography>
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* --------- About --------- */}
          <ListItem disableGutters>
            <ListItemButton
              selected={index === 1}
              onClick={(ev) => handleClick(ev, 1)}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText sx={{ textDecoration: "none" }}>
                <Link to={AppRoutes.about}>
                  <Typography>Giới thiệu</Typography>
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* --------- Services --------- */}
          <ListItem disableGutters>
            <ListItemButton
              selected={index === 1}
              onClick={(ev) => handleClick(ev, 1)}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText sx={{ textDecoration: "none" }}>
                <Link to={AppRoutes.services}>
                  <Typography>Dịch vụ</Typography>
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* --------- Categories --------- */}
          <ListItem disableGutters>
            <ListItemButton
              selected={index === 1}
              onClick={(ev) => handleClick(ev, 1)}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText sx={{ textDecoration: "none" }}>
                <Link to={AppRoutes.categories}>
                  <Typography>Giới thiệu</Typography>
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: "auto" }} onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default MyDrawer;
