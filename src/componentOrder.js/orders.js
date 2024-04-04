
import img4 from "../imgs/img4.jpg";
import img5 from "../imgs/img5.jpg";
import img6 from "../imgs/img6.jpg";
import img7 from "../imgs/img7.jpg";
import img8 from "../imgs/img8.jpg";
import img9 from "../imgs/img9.jpg";
import img10 from "../imgs/img10.jpg";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Orders() {
  let data = [
    {
      img: img4,
      item: "product1",
      customerName: "vinet",
      total: "$67,98",
      status: "pending",
      location: "USA",
    },
    {
      img: img5,
      item: "product2",
      customerName: "carson darrin",
      total: "$67,98",
      status: "pending",
      location: "USA",
    },
    {
      img: img6,
      item: "product3",
      customerName: "fran oerez",
      total: "$67,98",
      status: "pending",
      location: "USA",
    },
    {
      img: img7,
      item: "product4",
      customerName: "anika viseer",
      total: "$67,98",
      status: "pending",
      location: "USA",
    },
    {
      img: img8,
      item: "product5",
      customerName: "miron vitold",
      total: "$67,98",
      status: "pending",
      location: "USA",
    },
    {
      img: img9,
      item: "product6",
      customerName: "omar darobe",
      total: "$67,98",
      status: "pending",
      location: "USA",
    },
    {
      img: img10,
      item: "product7",
      customerName: "lulia albu",
      total: "$67,98",
      status: "pending",
      location: "USA",
    },
  ];

  let showData = data.map((index, id) => (
    <tr style={{ textAlign: "center", height: "30px" }}>
      <td
        style={{
          textAlign: "center",
          borderTop: "1px solid rgb(170, 170, 170)",
          padding: "10px 0px",
        }}
      >
        <img
          src={index.img}
          style={{ height: "40px", borderRadius: "7px", marginRight: "10px",width:'40px', }}
        />
        {index.item}
      </td>

      <td
        style={{
          textAlign: "center",
          borderTop: "1px solid rgb(170, 170, 170)",
          padding: "10px 0px",
        }}
      >
        {index.customerName}
      </td>

      <td
        style={{
          textAlign: "center",
          borderTop: "1px solid rgb(170, 170, 170)",
          padding: "10px 0px",
        }}
      >
        {index.total}
      </td>

      <td
        style={{
          textAlign: "center",
          borderTop: "1px solid rgb(170, 170, 170)",
          padding: "10px 0px",
        }}
      >
        {index.status}
      </td>

      <td
        style={{
          textAlign: "center",
          borderTop: "1px solid rgb(170, 170, 170)",
          padding: "10px 0px",
        }}
      >
        {id+1210}
      </td>
      <td
        style={{
          textAlign: "center",
          borderTop: "1px solid rgb(170, 170, 170)",
          padding: "10px 0px",
        }}
      >
        <FontAwesomeIcon icon={faLocationDot} />
        {index.location}
      </td>
    </tr>
  ));

  return (
    <div
      style={{
        backgroundColor: "rgb(53, 53, 53)",
        padding: "30px",
        borderRadius: "20px",
      }}
    >
      <h2 style={{ fontFamily: "sans-serif" }}>employes</h2>
      <table
        style={{
          width: "100%",
          border: "1px solid rgb(170, 170, 170)",
          backgroundColor: "rgb(36, 36, 36)",
        }}
      >
        <thead style={{ boxShadow: "0px 3px 10px -5px #fff" }}>
          <tr>
            <td
              style={{
                textAlign: "center",
                paddingBottom: "5px",
              }}
            >
              item
            </td>

            <td
              style={{
                textAlign: "center",
                paddingBottom: "5px",
              }}
            >
              customers name
            </td>

            <td
              style={{
                textAlign: "center",
                paddingBottom: "5px",
              }}
            >
              total Amount
            </td>

            <td
              style={{
                textAlign: "center",
                paddingBottom: "5px",
              }}
            >
              status
            </td>

            <td
              style={{
                textAlign: "center",
                paddingBottom: "5px",
              }}
            >
              order id
            </td>

            <td
              style={{
                textAlign: "center",
                paddingBottom: "5px",
              }}
            >
              location
            </td>
          </tr>
        </thead>
        <tbody style={{ marginTop: "30px" }}>{showData}</tbody>
      </table>
    </div>
  );
}
