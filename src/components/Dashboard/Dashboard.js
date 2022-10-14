import React from 'react';
import MyChart from '../MyChart/MyChart';

const Dashboard = () => {
    return (
        <div className='py-5'>
            <h3 className='text-center py-2'>Chart-1</h3>
            <MyChart></MyChart>
            <h3 className='text-center py-5'>Chart-2 is Commmiiing sooon....</h3>
        </div>
    );
};

export default Dashboard;