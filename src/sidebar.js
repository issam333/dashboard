import {
  faShop,
  faCartShopping,
  faUsers,
  faUserGear,
  faCalendar,
  faChartColumn,
  faPenToSquare,
  faFillDrip,
  faChartLine,
  faChartArea,
  faChartBar,
  faChartPie,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { render } from "@testing-library/react";
import Navbar from "./navbar";

export default function Sidebar({ sidebarVisible }) {
  const styles = {
    translate: "-150px 0",
  };

  return (
    <>
      <div
        className="sidebar"
        style={sidebarVisible ? { translate: "-90% 0" } : {}}
      >
        <h2 style={{ color: "red" }}></h2>
        <h2>DASHBOARD</h2>
        <div className="sideBarsItems2">
          <Link className="item" to="/dachboard">
            <FontAwesomeIcon
              icon={faShop}
              style={{ color: "rgb(148, 157, 178)" }}
            />
            <a id="test">ecomerce</a>
          </Link>
        </div>
        <h2>PAGES</h2>
        <div className="sideBarsItems2">
          <Link to="/orders" className="item">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "rgb(148, 157, 178)" }}
            />
            orders
          </Link>
          <Link to="/employes" className="item">
            <FontAwesomeIcon
              icon={faUsers}
              style={{ color: "rgb(148, 157, 178)" }}
            />
            employes
          </Link>
          <Link to="/" className="item">
            <FontAwesomeIcon
              icon={faUserGear}
              style={{ color: "rgb(148, 157, 178)" }}
            />
            customers
          </Link>
        </div>
        <h2>APPS</h2>
        <div className="sideBarsItems2">
          <Link to="/" className="item">
            <FontAwesomeIcon
              icon={faCalendar}
              style={{ color: "rgb(148, 157, 178)" }}
            />
            calendar
          </Link>
          <Link to="/" className="item">
            <FontAwesomeIcon
              icon={faChartColumn}
              style={{ color: "rgb(148, 157, 178)" }}
            />
            kanban
          </Link>
          <Link to="/" className="item">
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ color: "rgb(148, 157, 178)" }}
            />
            editor
          </Link>
          <Link to="/" className="item">
            <FontAwesomeIcon
              icon={faFillDrip}
              style={{ color: "rgb(148, 157, 178)" }}
            />
            color-picker
          </Link>
        </div>
        <h2>CHARTS</h2>
        <div className="sideBarsItems2">
          <Link to="/" className="item">
            <FontAwesomeIcon
              icon={faChartLine}
              style={{ color: "rgb(148, 157, 178)" }}
            />
            line
          </Link>
          <Link to="/" className="item">
            <FontAwesomeIcon
              icon={faChartArea}
              style={{ color: "rgb(148, 157, 178)" }}
            />
            area
          </Link>
          <Link to="/" className="item">
            <FontAwesomeIcon
              icon={faChartBar}
              style={{ color: "rgb(148, 157, 178)" }}
            />
            bar
          </Link>
          <Link to="/" className="item">
            <FontAwesomeIcon
              icon={faChartPie}
              style={{ color: "rgb(148, 157, 178)" }}
            />
            pie
          </Link>
          <Link to="/" className="item">
            <FontAwesomeIcon
              icon={faCoins}
              style={{ color: "rgb(148, 157, 178)" }}
            />
            financial
          </Link>
        </div>
      </div>
    </>
  );
}
