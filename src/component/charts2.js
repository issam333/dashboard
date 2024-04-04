import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function charts2() {
  const data = [
    {
      name: "Mo",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Tu",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "We",
      uv: 2000,
      pv: 7000,
      amt: 2290,
    },
    {
      name: "Th",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Fr",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Sa",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Su",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{backgroundColor:'rgb(81, 81, 81)',padding:'0px 12px',borderRadius:'5px'}} className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          {/* Customize tooltip content as needed */}
        </div>
      );
    }
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 5,
            left: 0,
            bottom: 5,
          }}
          
          barSize={20}
        >
          <XAxis
            stroke="#fff"
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
            
          />
          <YAxis stroke="#fff" />
          <Tooltip  content={<CustomTooltip />}/>
          <Legend />
          <CartesianGrid stroke="#ff" strokeDasharray="3 3" />
          <Bar  dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
          
        </BarChart>
        
      </ResponsiveContainer>
    </>
  );
}
