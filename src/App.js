import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Content from "./content";
import Dachboard from "./dachboard";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  const [sidebarVisible, setsidebarVisible] = useState(true);

  useEffect(() => {
    console.log(sidebarVisible);
  }, [sidebarVisible]);

  return (
    <>
      <div className="body">
        <Sidebar sidebarVisible={sidebarVisible} />
        <Navbar
          isSidebarVisible={sidebarVisible}
          toggleSidebarVisiblity={setsidebarVisible}
        />
        <Content />
      </div>
    </>
  );
}
