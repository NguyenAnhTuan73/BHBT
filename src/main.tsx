import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import "antd/dist/antd.css";
import "./index.css";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
