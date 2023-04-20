import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import { Header } from "./components/header/Header";
import { ScrollToTop } from "./components/utilities/ScrollToTop";

function App() {
  return (
    <AppShell
      header={<Header />}
      footer={<Footer />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <ScrollToTop />
      <Outlet />
    </AppShell>
  );
}

export default App;
