import React from "react";
import "./layout.css";
import StatusBar from "./statusbar";
import Navigation from "./navigation";


import Header from "./header";
import Content from "./content";

const Layout = () => {
  return (
    <>
      <Navigation />
      <div>
        <StatusBar />
        <Header />
        <Content></Content>
      </div>
    </>
  );
};

export default Layout;
