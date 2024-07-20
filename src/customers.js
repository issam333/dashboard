import img1 from "./imgs/img1.jpg";
import img2 from "./imgs/img2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Customers() {
  let [btnDelet, setBtnDelet] = useState("none");
  let [checkAll, setCheckAll] = useState(null);
  
  

  let fnctCheckAll = (e) => {
    if (e.target.checked === true) {
      setBtnDelet("flex");

      setCheckAll(true);
      console.log(checkAll)
    } else{
      setBtnDelet("none");

      setCheckAll(null);
      console.log(checkAll)
    }
    
  };

  let showBtnDelet = (e) => {
    if (e.target.checked === true) {
      setBtnDelet("flex");
      
    } if (e.target.checked === null) {  
      setBtnDelet("none");
    }
  };

  

  let data = [
    {
      img: img1,
      employes: "nancy Davolic",
      designation: "sales Representative",
      country: "USA",
      hireDate: "01/02/2024",
      reportsTo: "Carson",
    },
    {
      img: img2,
      employes: "nancy Davolic",
      designation: "sales Representative",
      country: "USA",
      hireDate: "01/02/2024",
      reportsTo: "carson",
    },
    {
      img: img1,
      employes: "nancy Davolic",
      designation: "sales Representative",
      country: "USA",
      hireDate: "01/02/2024",
      reportsTo: "carson",
    },
    {
      img: img2,
      employes: "nancy Davolic",
      designation: "sales Representative",
      country: "USA",
      hireDate: "01/02/2024",
      reportsTo: "carson",
    },
    {
      img: img1,
      employes: "nancy Davolic",
      designation: "sales Representative",
      country: "USA",
      hireDate: "01/02/2024",
      reportsTo: "carson",
    },
    {
      img: img2,
      employes: "nancy Davolic",
      designation: "sales Representative",
      country: "USA",
      hireDate: "01/02/2024",
      reportsTo: "carson",
    },
    {
      img: img1,
      employes: "nancy Davolic",
      designation: "sales Representative",
      country: "USA",
      hireDate: "01/02/2024",
      reportsTo: "carson",
    },
    {
      img: img2,
      employes: "nancy Davolic",
      designation: "sales Representative",
      country: "USA",
      hireDate: "01/02/2024",
      reportsTo: "carson",
    },
    ,
    {
      img: img1,
      employes: "nancy Davolic",
      designation: "sales Representative",
      country: "USA",
      hireDate: "01/02/2024",
      reportsTo: "carson",
    },
    {
      img: img2,
      employes: "nancy Davolic",
      designation: "sales Representative",
      country: "USA",
      hireDate: "01/02/2024",
      reportsTo: "carson",
    },
    {
      img: img1,
      employes: "nancy Davolic",
      designation: "sales Representative",
      country: "USA",
      hireDate: "01/02/2024",
      reportsTo: "carson",
    },
  ];

  let showData = data.map((index, id) => (
    <tr style={{ textAlign: "center", height: "30px" }} key={`issam${id}`} >
      <td
        style={{
          textAlign: "center",
          paddingBottom: "10px 0px",
          borderTop: "1px solid rgb(170, 170, 170)",
        }}
      >
        <input
          type="checkBox"
          checked={checkAll}
          onClick={showBtnDelet}
        />
      </td>
      <td
        style={{
          textAlign: "center",
          borderTop: "1px solid rgb(170, 170, 170)",
          padding: "10px 0px",
        }}
      >
        <img
          src={index.img}
          style={{ height: "30px", borderRadius: "50%", marginRight: "10px" }}
        />
        {index.employes}
      </td>
      <td
        style={{
          textAlign: "center",
          borderTop: "1px solid rgb(170, 170, 170)",
          padding: "10px 0px",
        }}
      >
        {index.designation}
      </td>
      <td
        style={{
          textAlign: "center",
          borderTop: "1px solid rgb(170, 170, 170)",
          padding: "10px 0px",
        }}
      >
        <FontAwesomeIcon icon={faLocationDot} /> {index.country}
      </td>
      <td
        style={{
          textAlign: "center",
          borderTop: "1px solid rgb(170, 170, 170)",
          padding: "10px 0px",
        }}
      >
        {index.hireDate}
      </td>
      <td
        style={{
          textAlign: "center",
          borderTop: "1px solid rgb(170, 170, 170)",
          padding: "10px 0px",
        }}
      >
        {index.reportsTo}
      </td>
      <td
        style={{
          textAlign: "center",
          borderTop: "1px solid rgb(170, 170, 170)",
          padding: "10px 0px",
        }}
      >
        {id + 1}
      </td>
    </tr>
  ));

  // filter
  let [filter,setFilter] = useState(showData)

  let functionBtnDelete = ()=>{
    let issam = showData.filter((el)=>(el.checked !== true))
    setFilter(issam)
    console.log(issam)
  }

  return (
    <div>
      <h2 style={{ fontFamily: "sans-serif" }}>employes</h2>
      <table
        style={{
          cursor: "pointer",
          color: "red",
          width: "100%",
          display: btnDelet,
          justifyContent: "center",
          border: "1px solid rgb(170, 170, 170)",
        }}
        onClick={functionBtnDelete}
      >
        <FontAwesomeIcon   icon={faTrash} style={{ padding: "3px" }} />
      </table>

      <table style={{ width: "100%", border: "1px solid rgb(170, 170, 170)" }}>
        <thead style={{ boxShadow: "0px 3px 10px -5px #fff" }}>
          <tr>
            <td
              style={{
                textAlign: "center",
                paddingBottom: "10px 0px",
                borderTop: "1px solid rgb(170, 170, 170)",
              }}
            >
              <input
                type="checkBox"
                style={{
                  textAlign: "center",
                  paddingBottom: "5px",
                }}
                onChange={fnctCheckAll}
              />
            </td>
            <td
              style={{
                textAlign: "center",
                paddingBottom: "5px",
              }}
            >
              employes
            </td>
            <td
              style={{
                textAlign: "center",
                paddingBottom: "5px",
              }}
            >
              designation
            </td>
            <td
              style={{
                textAlign: "center",
                paddingBottom: "5px",
              }}
            >
              country
            </td>
            <td
              style={{
                textAlign: "center",
                paddingBottom: "5px",
              }}
            >
              hire date
            </td>
            <td
              style={{
                textAlign: "center",
                paddingBottom: "5px",
              }}
            >
              reportsTo
            </td>
            <td
              style={{
                textAlign: "center",
                paddingBottom: "5px",
              }}
            >
              id
            </td>
          </tr>
        </thead>
        <tbody style={{ marginTop: "30px" }}>{showData}</tbody>
      </table>
    </div>
  );
}
