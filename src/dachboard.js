
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faRotate, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faSellsy } from "@fortawesome/free-brands-svg-icons";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import Chart from "./component/charts";
import Charts2 from "./component/charts2";
import Charts3 from "./component/charts3";
import Charts4 from "./component/charts4";


export default function Dachboard() {
  return (
    <>
      <div className="test">
        <div id="itemsDachboard1">
          <p
            className="elements1item1"
            style={{
              color: "black",
              fontFamily: "sans-serif",
              color: "rgb(50, 50, 50)",
              position: "absolute",
              top: "50px",
              backdropFilter: "blur(10px)",
              padding: "0px 5px",
              borderRadius: "3px",
            }}
          >
            earnings
          </p>
          <p
            className="elements1item2"
            style={{
              color: "black",
              fontFamily: "sans-serif",
              position: "absolute",
              top: "74px",
              backdropFilter: "blur(10px)",
              borderRadius: "3px",
              padding: "0px 5px",
            }}
          >
            $63,323.23
          </p>
          <button
            className="btn1item1"
            style={{
              color: "rgb(50, 50, 50)",
              fontFamily: "sans-serif",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "rgb(3, 201, 215)",
              position: "absolute",
              top: "110px",
              color: "10px",
            }}
          >
            Download
          </button>
        </div>
        <div id="itemsDachboard2">
          <FontAwesomeIcon
            icon={faUsers}
            style={{
              backgroundColor: "rgb(229, 250, 251)",
              color: "rgb(3, 201, 215)",
              padding: "10px",
              borderRadius: "50%",
              position: "absolute",
              top: "40px",
            }}
          />
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: "86px",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <p>469,344</p>
            <p
              style={{
                fontSize: "10px",
                fontWeight: "700",
                color: 'rgb(0, 194, 146)',
              }}
            >
              30%
            </p>
          </div>
          <p
            style={{
              display: "flex",
              position: "absolute",
              top: "110px",
              gap: "10px",
            }}
          >
            customers
          </p>
        </div>
        <div id="itemsDachboard3">
          <FontAwesomeIcon
            icon={faCube}
            style={{
              backgroundColor: "rgb(255, 244, 229)",
              color: "rgb(254, 201, 15)",
              padding: "10px",
              borderRadius: "50%",
              position: "absolute",
              top: "40px",
            }}
          />
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: "86px",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <p>659</p>
            <p style={{ fontSize: "10px", fontWeight: "700", color: "rgb(0, 194, 146)" }}>
              +20%
            </p>
          </div>
          <p
            style={{
              display: "flex",
              position: "absolute",
              top: "110px",
              gap: "10px",
            }}
          >
            products
          </p>
        </div>

        <div id="itemsDachboard4">
          <FontAwesomeIcon
            icon={faSellsy}
            style={{
              backgroundColor: "green",

              padding: "10px",
              borderRadius: "50%",
              position: "absolute",
              top: "40px",
            }}
          />
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: "86px",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <p>395</p>
            <p
              style={{
                fontSize: "10px",
                fontWeight: "700",
                color: " rgb(0, 194, 146)",
              }}
            >
              32%
            </p>
          </div>
          <p
            style={{
              display: "flex",
              position: "absolute",
              top: "110px",
              gap: "10px",
            }}
          >
            Seles
          </p>
        </div>
        <div id="itemsDachboard5">
          <FontAwesomeIcon
            icon={faRotate}
            style={{
              backgroundColor: "#915151",
              padding: "10px",
              borderRadius: "50%",
              position: "absolute",
              top: "40px",
            }}
          />
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: "86px",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <p>12</p>
            <p
              style={{
                fontSize: "10px",
                fontWeight: "700",
                color: "rgb(228, 106, 118)",
              }}
            >
              -65%
            </p>
          </div>
          <p
            style={{
              display: "flex",
              position: "absolute",
              top: "110px",
              gap: "10px",
            }}
          >
            Refounds
          </p>
        </div>

        <div id="itemsDachboard6">
          <div style={{ height: "150px", width: "100%", overflow: "hidden" }}>
            <Chart />
          </div>
          <div style={{ height: "150px" }}>
            <Charts2 />
          </div>
        </div>
        <div id="itemsDachboard7">
          <Charts3 />
        </div>
        <div id="itemsDachboard8">
          <Charts4 />
        </div>
      </div>
    </>
  );
}
