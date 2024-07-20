import { sort } from "@syncfusion/ej2-react-charts";
import React, { PureComponent } from "react";
import { Last } from "react-bootstrap/esm/PageItem";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

export default function charts1() {
  const data = [
    {
      name: 2018,
      uv: 1000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 2019,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 2020,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 2021,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 2022,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 2023,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 2024,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },{
      name: 2024,
      uv: 3390,
      pv: 300,
      amt: 2100,
    }
  ];
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "rgb(81, 81, 81)",
            padding: "0px 12px",
            borderRadius: "5px",
          }}
          className="custom-tooltip"
        >
          <p className="label">{`${label} : $${payload[0].value}.00`}</p>
          {/* Customize tooltip content as needed */}
        </div>
      );
    }
  };

  // let info = [`$${data[1].pv}.00`]

  
  
  let info = data[data.length-1].uv;

  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "rgb(93, 93, 93)",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4 style={{ fontFamily: "roboto" }}>revenu</h4>
          <h6 style={{fontWeight:'400',}}>{`$${info}.00`}</h6>
        </div>

        <ResponsiveContainer width="100%" height={85}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="transparant" />
            <XAxis dataKey="name" stroke="rgb(0, 187, 255)" />
            <YAxis
              tickFormatter={(number) => `$${number.toFixed()}`}
              stroke="rgb(0, 187, 255)"
            />
            <Tooltip content={<CustomTooltip />} />
            <Line hanging='2px' type="monotone" dataKey="uv" stroke="#8884d8" fill="#fff" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
