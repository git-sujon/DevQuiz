import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuizCatagorisContext } from '../Main/Main';
import QuizCatagoriesDisplay from '../QuizCatagoriesDisplay/QuizCatagoriesDisplay';

const QuizCatagoriesLoad = () => {
    const quizes = useContext(QuizCatagorisContext)
    // console.log(quizes.data)

    return (
        <div className='my-16 container px-4 mx-auto'>
            <h1 className='text-4xl text-gray-900 mb-9'>Interview Quiz</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    quizes.data.map(quiz => <QuizCatagoriesDisplay key={quiz.id} quiz={quiz}> </QuizCatagoriesDisplay>)
                }

            </div>
           
        </div>
    );
};

export default QuizCatagoriesLoad;