import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/Pagenotfound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);