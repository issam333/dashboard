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

export default function Navbar({ isSidebarVisible, toggleSidebarVisiblity }) {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    toggleSidebarVisiblity(!isSidebarVisible);
  };

  return (
    <div>
      <div className="item2">
        <div
          className="leftContent"
          style={isSidebarVisible ? { translate: "-90% 0" } : {}}
        >
          <FontAwesomeIcon
            className="iconsLeft"
            icon={faBars}
            onClick={toggleSidebar}
          />
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
    </div>
  );
}
