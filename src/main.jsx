import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/Pagenotfound";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);