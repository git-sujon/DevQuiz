import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { QuizCatagorisContext } from '../Main/Main';

const Analytics = () => {
    const data = useContext(QuizCatagorisContext)
    let quizData = data.data
    // console.log(quizData)

    return (
        <div>
            <h1 className='mb-16 text-5xl text-gray-700 text-center'>Quiz Analytics</h1>
            <div className='w-96 mx-auto'>
            <ResponsiveContainer width={350} height={400}>

                <BarChart width={300} height={400} data={quizData}>
                <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
               

                </BarChart>

                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Analytics;

