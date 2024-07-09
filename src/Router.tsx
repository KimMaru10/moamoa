import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Join from "./pages/Join";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
