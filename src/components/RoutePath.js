import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./News";

const RoutePath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePath;
