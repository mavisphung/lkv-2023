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
          {/* Trang chủ */}
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
          {/* Giới thiệu */}
          <ListItem disableGutters>
            <ListItemButton
              selected={index === 1}
              onClick={(ev) => handleClick(ev, 1)}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText sx={{ textDecoration: "none" }}>
                <Link to={AppRoutes.home}>
                  <Typography>Giới thiệu</Typography>
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default MyDrawer;
