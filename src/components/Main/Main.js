import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export const QuizCatagorisContext = createContext([])

const Main = () => {
    const data = useLoaderData()
    // console.log(data)

    return (
        <div className=''>
            <QuizCatagorisContext.Provider value={data}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </QuizCatagorisContext.Provider>

        </div>
    );
};

export default Main;