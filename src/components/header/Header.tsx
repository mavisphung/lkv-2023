import * as React from "react";
import AppColor from "../../shared/color";
import AppleIcon from "@mui/icons-material/Apple";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import "./Header.css";
import MyDrawer from "../drawer/MyDrawer";
import { NavLink, useNavigate } from "react-router-dom";
import AppRoutes from "../../routes/Routes";

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [currentTab, setCurrentTab] = React.useState<string>(AppRoutes.home);

  // hàm xử lí chọn tab
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    event.preventDefault();
    setCurrentTab(newValue);
    navigate(newValue);
  };

  const handleOnClickIcon = (event: React.MouseEvent) => {
    event.preventDefault();
    setCurrentTab(AppRoutes.home);
    navigate(AppRoutes.root);
  }

  function a11yProps(index: number) {
    return {
      key: `simple-tab-${index}`,
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const myTabs: TabElement[] = [
    {
      name: "Trang chủ",
      route: AppRoutes.home,
    },
    {
      name: "Giới thiệu",
      route: AppRoutes.about,
    },
    {
      name: "Dịch vụ",
      route: AppRoutes.services,
    },
    {
      name: "Sản phẩm",
      route: AppRoutes.categories,
    },
  ];

  // bắt kích thước của màn hình từ md trở xuống
  // < md (ipad) thì true
  // sm là màn hình của điện thoại iphone
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <React.Fragment>
        <AppBar
          elevation={0}
          position="sticky"
          variant="outlined"
          sx={{ background: AppColor.palette.primary.white }}
        >
          <Toolbar>
            <NavLink to={AppRoutes.root} onClick={handleOnClickIcon}>
              <AppleIcon color="success" />
            </NavLink>
            {isMobile ? (
              <MyDrawer />
            ) : (
              <Tabs
                value={currentTab}
                onChange={(event, value) => handleChange(event, value)}
              >
                {/* value phải trùng với AppRoutes thì Tabs mới nhận được để display active */}
                {myTabs.map((tab, i) => (
                  <Tab label={tab.name} value={tab.route} {...a11yProps(i)} />
                ))}
              </Tabs>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </>
  );
};

type TabElement = {
  name: string;
  route: string;
};

export default Header;
