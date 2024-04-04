import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 5800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Charts3() {
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
          <p className="label">{`${label + 1} : ${payload[1].value}`}</p>
          {/* Customize tooltip content as needed */}
        </div>
      );
    }
  };

  return (
    <>
      <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height:'50px',
            marginTop:'10px',
          }}
        >
          <h4 style={{ fontFamily: "roboto" }}>earnings</h4>
          <div style={{fontWeight:'400',height:'100%',}}>
            <p>$63,876.00</p>
            <p style={{marginTop:'-16px',fontSize:'10px',}}>monthly revenue</p>
          </div>
        </div>
      <ResponsiveContainer  height={90}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          
        >
          <CartesianGrid stroke="" strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="pv" fill="#fff" activeBar={<Rectangle fill="#fff" />} />
          <Bar
            dataKey="uv"
            fill="#82ca9d"
            activeBar={<Rectangle fill="#82ca9d" />}
          />
        </BarChart>
      </ResponsiveContainer>
      <></>
    </>
  );
}
