import { Routes, Route, Navigate, useNavigate, Outlet } from "react-router-dom";

import "./App.css";
import "antd/dist/antd.css";
function App() {
  return (
    <div className="bg-[#ccc] ">
      <div className="section">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
