import { useMediaQuery } from "@mui/material";
import "./App.css";
import Head from "./components/Head";
import { Outlet } from "react-router-dom";

const App = () => {
  const isSmall = useMediaQuery("(max-width:500px)");

  const headWidth = isSmall ? "70%" : "60%";
  const mainWidth = isSmall ? "80%" : "70%";

  const headHeight = isSmall ? "190px" : "170px";

  return (
    <div className="col-container" style={{ height: "100%" }}>
      <div
        className="head-card"
        style={{
          width: headWidth,
          minHeight: headHeight,
        }}
      >
        <Head />
      </div>
      <div className="main-card" style={{ width: mainWidth }}>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
