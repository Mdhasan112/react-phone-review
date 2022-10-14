import React from 'react';
import { Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';

const MyChart = () => {
    const data = [
        {
          name: 'Page A',
          price: 4000,
          sales: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          price: 3000,
          sales: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          price: 2000,
          sales: 2600,
          amt: 2290,
        },
        {
          name: 'Page D',
          price: 2780,
          sales: 3000,
          amt: 2000,
        },
        {
          name: 'Page E',
          price: 1890,
          sales: 3000,
          amt: 2181,
        },
        {
          name: 'Page F',
          price: 2390,
          sales: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          price: 3490,
          sales: 3000,
          amt: 2100,
        },
      ];

    return (
            <LineChart width={600} height={300} data={data}>
                <Line dataKey={'price'}></Line>
                <Line dataKey={'sales'}></Line>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={'price'}></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
    );
};

export default MyChart;