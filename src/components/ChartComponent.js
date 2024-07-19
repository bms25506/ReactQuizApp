import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartComponent = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={data.datasets[0].data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill={({ payload }) => payload.fill} />
    </BarChart>
  </ResponsiveContainer>
);

export default ChartComponent;
