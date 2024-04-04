import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 40 },
  { name: "Group B", value: 35 },
  { name: "Group C", value: 25 },
  { name: "Group D", value: 23 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
// let info = {}
export default function Charts4() {
  return (
    <div style={{width:'90%',height:'90%',display:'flex',justifyContent:'space-between',gap:'0px',}}>
        <div style={{marginTop:'20px',width:'100px',}}>
            <p>$43,682</p>
            <p style={{fontSize:'13px',}}>yearly sales</p>
        </div>
      <ResponsiveContainer >
        <PieChart width={'40px'} height={'40px'} >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={65}
            fill="#8884d8"
            dataKey="value"
            
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
