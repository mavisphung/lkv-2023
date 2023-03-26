import * as React from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AppRoutes from "../../routes/Routes";
import { myTabs } from "../../shared";
import { TabElement } from "../../shared/types";
import { Container, Tabs } from "@mantine/core";

const Header = () => {
  const navigate = useNavigate();
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
  };

  function a11yProps(index: number) {
    return {
      key: `simple-tab-${index}`,
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  // App bar dành cho desktop
  const desktopTabs: TabElement[] = myTabs.slice(0, -1);

  // bắt kích thước của màn hình từ md trở xuống
  // < md (ipad) thì true
  // sm là màn hình của điện thoại iphone
  return (
    <>
      <React.Fragment>
        <Container size="xl">
          <Tabs defaultValue={AppRoutes.root}>
            <Tabs.List>
              {desktopTabs.map((el, idx) => (
                <Link to={el.route} {...a11yProps(idx)}>
                  <Tabs.Tab value={el.route}>{el.name}</Tabs.Tab>
                </Link>
              ))}
            </Tabs.List>
          </Tabs>
        </Container>
      </React.Fragment>
    </>
  );
};

export default Header;
