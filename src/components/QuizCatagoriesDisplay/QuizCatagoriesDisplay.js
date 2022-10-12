import React from 'react';
import { Link } from 'react-router-dom';
import './QuizCatagoriesDisplay.css'



const QuizCatagoriesDisplay = ({ quiz }) => {
    const { id, name, logo, total } = quiz
    return (
        <div>
            {/* cards  */}
            <Link to={`../quiz/${id}`}>
                <div className="flex justify-center border ">
                    <div className="rounded-lg shadow-lg relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <Link to={`./quiz/${id}`}>
                            <img className="rounded-t-lg" src={logo} alt="" />
                        </Link>
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 overly-bg bg-opacity-75 opacity-0 hover:opacity-100 text-white font-black">
                            <h5 className=" text-5xl text-center font-medium mb-2">{name}</h5>
                            <p className=' text-xl font-bold'>Total Quiz: {total}</p>
                            
                        </div>
                        <button className='bg-gray-900 w-full'><p className='flex items-center justify-center my-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-orange-100 w-20 h-20  lg:w-16 lg:h-16  border-8 border-double rounded-full border-orange-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                                </svg>
                                
                            </p></button>
                        
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default QuizCatagoriesDisplay;


