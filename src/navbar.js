import {
  faMagnifyingGlass,
  faCartShopping,
  faMessage,
  faBell,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Sidebar from "./sidebar";
import Content from "./content";
import { render } from "@testing-library/react";

export default function Navbar() {

  const [sidebarVisible, setSidebarVisible] = useState(true);

  function toggleSidebar() {
    

  }
    
  return (
    <div className="item2" >
      <div className="leftContent">
        <FontAwesomeIcon className="iconsLeft" icon={faBars} onClick={toggleSidebar}/>
        <FontAwesomeIcon className="iconsLeft" icon={faMagnifyingGlass} />
      </div>
      <div className="rightContent">
        <FontAwesomeIcon className="iconsRight" icon={faCartShopping} />
        <FontAwesomeIcon className="iconsRight" icon={faMessage} />
        <FontAwesomeIcon className="iconsRight" icon={faBell} />
        <div className="userAcount">
          <FontAwesomeIcon className="iconsRight" icon={faUser} />
          <p>issam</p>
        </div>
      </div>
    </div>
  );
}
