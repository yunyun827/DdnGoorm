import React from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import ReactSwitch from "react-switch";
import Layout from "./components/layout/layout";
import Navigation from "./components/layout/navigation";
import Title from "./components/layout/Title";
import StatusBar from "./components/layout/statusbar";
import Home from "./app/page";
import Noti from "./pages/Notifications";
import Teams from "./pages/Teams";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <StatusBar />
      <Routes>
        <Title />
        <Route path="/" element={<Home />}></Route>
        <Route path="/notifications/*" element={<Noti />}></Route>
        <Route path="/teams/*" element={<Teams />}></Route>
        <Route path="/mypage/*" element={<MyPage />}></Route>
        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
