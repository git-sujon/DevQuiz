import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Pie, PieChart } from 'recharts';
import { QuizCatagorisContext } from '../Main/Main';

const Analytics = () => {
    const data = useContext(QuizCatagorisContext)
    const quizData = data.data
    // console.log(quizData)
    const fakeDataLoad = useLoaderData()
    const fakeDataOne = fakeDataLoad[0]
    const fakeDataTwo = fakeDataLoad[1]

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
            <br />
            <br />


            <h1 className='mt-44 text-5xl text-gray-700 text-center'>Student Health Analytics</h1>




            <div className='w-96 mx-auto'>
                <ResponsiveContainer width={350} height={400}>

                    <PieChart width={400} height={400}>
                        <Pie data={fakeDataOne} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={fakeDataTwo} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                       
                    </PieChart>

                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Analytics;

