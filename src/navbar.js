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

export default function Navbar({ sidebarVisible, toggleSidebarVisiblity }) {
  // saerch
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState(["-230px 0px", "-10"]);

  const btnSearch = () => {
    setSearch(preveState=>!preveState);
    if (search === false) {
      setSearchInput(["0px 0px", "0"]);
    } else{
      setSearchInput(["-240px 0px", "0"]);
    }
    };

  // bars
  const toggleSidebar = () => {
    
    toggleSidebarVisiblity(!sidebarVisible);

  };

  return (
    <>
      <div
        className="item2"
        style={sidebarVisible   ? { gridColumn: "1/13" } : {}}
      >
        <div className="leftContent">
          <FontAwesomeIcon
            className="iconsLeft"
            icon={faBars}
            onClick={toggleSidebar}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              border: "none",
              
            }}
          >
            <FontAwesomeIcon
              className="iconsLeft"
              icon={faMagnifyingGlass}
              onClick={btnSearch}
        
            />
            <div style={{
              overflow:'hidden',
            }}>
            <input
              placeholder="search"
              style={{
                border: "none",
                outline: "none",
                padding: "0px 10px 2px 10px",
                borderRadius: "50px",
                translate: searchInput[0],
                zIndex: searchInput[1],
                transition: "0.2s",
                backgroundColor:'#515151',
              }}
            />
            </div>
          </div>
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
    </>
  );
}
