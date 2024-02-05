import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart } from 'recharts';

const BarChartExample = () => {
  const data = [
    { name: 'Janvier', uv: 1400, pv: 2400},
    { name: 'Février', uv: 3000, pv: 4567},
    { name: 'Mars', uv: 2000, pv: 1398},
    { name: 'Avril', uv: 2178, pv: 3908},
    { name: 'Mai', uv: 1089, pv: 4800},
    { name: 'Juin', uv: 239, pv: 3800},
    { name: 'Juillet', uv: 3049, pv: 4300},
  ];

  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
};

export default BarChartExample;
