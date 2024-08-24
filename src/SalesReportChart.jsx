import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Area
} from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
  { name: 'Jun', uv: 2390, pv: 3800 },
  { name: 'Jul', uv: 3490, pv: 4300 },
  { name: 'Aug', uv: 2000, pv: 5400 },
  { name: 'Sep', uv: 3490, pv: 4300 },
  { name: 'Oct', uv: 4000, pv: 2400 },
  { name: 'Nov', uv: 3000, pv: 1398 },
  { name: 'Dec', uv: 2000, pv: 9800 },
];

const SalesReportChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart
      data={data}
      margin={{
        top: 10, right: 30, left: 0, bottom: 0,
      }}
    >
       <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
         <Area
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        fillOpacity={0.2}
        fill="#8884d8"
      />
      <Line   strokeWidth={3}  type="monotone" dataKey="pv" stroke="#8884d8" dot={false} />
      
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#82ca9d"
        fillOpacity={0.2}
        fill="#82ca9d"
      />
      
    </LineChart>
  </ResponsiveContainer>
);

export default SalesReportChart;
