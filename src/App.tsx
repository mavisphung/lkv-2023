import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { AppShell, Navbar } from "@mantine/core";

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
      <Outlet />
    </AppShell>
  );
}

export default App;
