import React from 'react';
import { Link } from 'react-router-dom';
import QuizCatagoriesLoad from '../QuizCatagoriesLoad/QuizCatagoriesLoad';
import './Home.css';

const Home = () => {
    return (

        <>
            <section className='showCase-bg flex flex-col justify-center align-center text-center '>

                {/* search button  */}
                <div className="flex justify-center mt-60 mb-16">
                    <div className="mb-3 xl:w-96">
                        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                            <button className="btn inline-block px-6 py-2.5 bg-orange-100 font-bold  text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* text and button  */}
                <div className='mb-8'>
                    <h1 className='text-2xl font-bold header-h1'>We have the largest collection of Tech Related Quiz</h1>
                </div>
                {/* button */}
                <div className='text-center mb-44'>
                <Link to='/quiz'>
                    <button className='hover:border-transparent header-button  rounded inline-block px-6 py-3 font-medium  shadow-md hover-bg-button hover:font-bold hover:text-white hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out '>
                        Have A Look
                    </button>
                </Link>
            </div>

            </section>

            {/* // Quiz Catagories  */}
            <QuizCatagoriesLoad></QuizCatagoriesLoad>

            <div className='text-center my-16'>
                <Link to='/quiz'>
                    <button className='border-2 hover:border-transparent border-gray-800 rounded inline-block px-6 py-3 font-medium  shadow-md hover-bg-button hover:font-bold hover:text-white hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out '>
                        View All Quiz
                    </button>
                </Link>
            </div>





        </>

    );
};

export default Home;