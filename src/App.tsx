import React from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router";
import ReactSwitch from "react-switch";
import Layout from "./components/layout/layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route component={Home} path="/" exact />
        <Route component={Menu1} path="/menu1" exact />
        <Route component={Menu2} path="/menu2" exact />
        <Route component={Menu3} path="/menu3" exact />
        <Route component={Menu4} path="/menu4" exact />
      </Routes>
    </BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Navigate replace to="/project" />} />
    //   <Route path="/project/*" element={<Layout />}>
    //     <Route path="" element={<Project />} />
    //   </Route>
    //   <Route path="/error" element={<Error />} />
    // </Routes>
  );
}

export default App;
