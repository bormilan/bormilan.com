import "./App.css";
import Head from "./components/Head";
import Main from "./components/Main";

import SideBar from "./components/Sidebar";

const App = () => {
  return (
    <div className="row-container">
      <SideBar />
      <div className="col-container">
        <div className="head-card">
          <Head />
        </div>
        <div className="main-card">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
