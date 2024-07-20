import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Content from "./content";
import Dachboard from "./dachboard";
import { useEffect, useState } from "react";

export default function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <div className="body">
        <Sidebar sidebarVisible={sidebarVisible} />
        <Navbar
          sidebarVisible={sidebarVisible}
          toggleSidebarVisiblity={setSidebarVisible}
        />
        <Content 
          isContentVisible={sidebarVisible}
        />
      </div>
    </>
  );
}
