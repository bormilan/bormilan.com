import { useMediaQuery } from "@mui/material";
import "./App.css";
import Head from "./components/Head";
import Main from "./components/Main";
import { Outlet } from "react-router-dom";

import SideBar from "./components/Sidebar";

const App = () => {
  const isSmall = useMediaQuery("(max-width:400px)");

  const headWidth = isSmall ? "70%" : "60%";
  const mainWidth = isSmall ? "80%" : "70%";

  return (
    <div className="row-container">
      <SideBar />
      <div className="col-container">
        <div className="head-card" style={{ width: headWidth }}>
          <Head />
        </div>
        <div className="main-card" style={{ width: mainWidth }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
