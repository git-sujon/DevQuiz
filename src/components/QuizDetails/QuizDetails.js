import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SIngleQuiz from '../SIngleQuiz/SIngleQuiz';
import cover from '../../Images/headerBg-2.jpg'

const QuizDetails = () => {
    const allQuizData= useLoaderData()
    // console.log(allQuizData)
    const {logo, name} =allQuizData.data
    // console.log(logo)

    return (
        <div className='container px-4 lg:px-16 mx-auto'>
            <img className='h-64 mx-auto' src={logo} alt="" />
            <h1 className='text-7xl mt-8 text-center'>{name} Quiz</h1>
          <ul className='list-decimal text-4xl'>
          {
            allQuizData.data.questions.map(singleQuiz=> <SIngleQuiz 
                    key={singleQuiz.id}
                    singleQuiz={singleQuiz}
                 
                 ></SIngleQuiz> )
           }
          </ul>
        </div>
    );
};

export default QuizDetails;