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

const Header = () => {
  const [index, setIndex] = React.useState<number>(0);
  const theme = useTheme();

  // bắt kích thước của màn hình từ md trở xuống
  // < md (ipad) thì true
  // sm là màn hình của điện thoại iphone
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
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
            <AppleIcon color="success" />
            {isMatch ? (
              <MyDrawer />
            ) : (
              <>
                <Tabs value={index} onChange={(ev, value) => setIndex(value)}>
                  <Tab style={{ fontWeight: "bolder" }} label="Trang chủ" />
                  <Tab style={{ fontWeight: "bolder" }} label="Giới thiệu" />
                  <Tab style={{ fontWeight: "bolder" }} label="Sản phẩm" />
                  <Tab style={{ fontWeight: "bolder" }} label="Dịch vụ" />
                </Tabs>
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </>
  );
};
export default Header;
