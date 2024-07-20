import { Border } from "@syncfusion/ej2-react-charts";
import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar,
  Line,
} from "recharts";

export default function Linechart() {
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
    },
    {
      name: 2024,
      uv: 3390,
      pv: 300,
      amt: 2100,
    },
  ];

  return (
    <>
      <h2>line</h2>
      <ComposedChart
        width={630}
        height={250}
        data={data}
        style={{
          backgroundColor: "#3F3F3F",
          color: "red",
          height: "90%",
          width: "100%",
          borderRadius:"10px",
        }}
      >
        <XAxis  dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff"/>
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="" />
        <Area type="monotone" dataKey="amt" fill="#8CDBE8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#01A3FF" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </>
  );
}
