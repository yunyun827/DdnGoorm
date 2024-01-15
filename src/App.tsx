import React from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router";
import ReactSwitch from "react-switch";
import Layout from "./components/layout/layout";
import Navigation from "./components/layout/navigation";
import Header from "./components/layout/Title";
import StatusBar from "./components/layout/statusbar";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <StatusBar />
      <Routes>
        <Title />
        <Route component={Home} path="/" exact />
        <Route component={Menu1} path="/menu1" exact />
        <Route component={Menu2} path="/menu2" exact />
        <Route component={Menu3} path="/menu3" exact />
        <Route component={Menu4} path="/menu4" exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
