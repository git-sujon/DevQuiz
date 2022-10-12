import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SIngleQuiz from '../SIngleQuiz/SIngleQuiz';

export const CountSateContext = createContext([])

const QuizDetails = () => {
  const allQuizData = useLoaderData()
  // console.log(allQuizData)
  const { logo, name } = allQuizData.data
  // console.log(logo)

  const [count, setCount] = useState(0)


  return (
    <CountSateContext.Provider value={[count, setCount]}>
      <div className='container px-4 lg:px-16 mx-auto'>
        <img className='h-64 mx-auto' src={logo} alt="" />
        <h1 className='text-7xl mt-8 text-center'>{name} Quiz</h1>
        <h2 className='text-3xl text-end'>Correct: {count}</h2>
        <ul className='list-decimal text-4xl'>
          {
            allQuizData.data.questions.map(singleQuiz => <SIngleQuiz
              key={singleQuiz.id}
              singleQuiz={singleQuiz}

            ></SIngleQuiz>)
          }
        </ul>
      </div>
    </CountSateContext.Provider>
  );
};

export default QuizDetails;