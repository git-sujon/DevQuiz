import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CountSateContext } from '../QuizDetails/QuizDetails';

const SIngleQuiz = ({ singleQuiz }) => {
    // console.log(singleQuiz.options)
    const [count, setCount] =useContext(CountSateContext)
    const { question, correctAnswer, options } = singleQuiz
    const [show, setShow] = useState(false)
    const [checked, setChecked] = useState(false)
    const [color, setColor] = useState(false)
   

    // options.find(option =>console.log(option) )
    const showHideHandler = () => {
        setShow(!show)
        setChecked(!checked)
        setColor(!color)
        // count===0 && color ? setCount(count) : setCount(count-1) 
        if(count !== 0) {
            setCount(count-1)
        }
       

        if (!show) {
            toast.success(`${correctAnswer}`);
            
        }

        
    }




    const checkedBtnHandler = (event) => {
      

        if (event.value === correctAnswer) {
            toast.success(`Correct`);
            setCount(count + 1)
            setChecked(!checked)
            
            

        }
        else {
            toast.error(`InCorrect`);
            count===0 ? setCount(count) : setCount(count-1) 
            setChecked(!checked)
            setColor(!color)
        }


    }


    return (
        <div className={`border-2  ${color ? 'border-red-500' : 'border-gray-500'} shadow-lg my-5 px-12 lg:px-16  py-8`}>
            <li><h3 className='text-3xl mb-5'>{question.slice(3, -4)}</h3></li>
            <div className='flex justify-between '>
                <div className=' '>
                   

                    {
                        options.map((option, idx) => <div><input
                            type="radio"
                            className=''
                            value={option}
                            id={idx}
                            name="Quiz"
                            disabled={checked}
                            onClick={(e) => checkedBtnHandler(e.target)}
                        /> <label className={`ml-12 my-1 text-xl  p-2 `} key={option.id}>{option}</label></div>)
                    }
                </div>
                <div onClick={(() => {
                    showHideHandler();

                })}>
                    {
                        show ?
                            <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokelinecap="round" strokelinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            </p>

                            :
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </p>
                    }
                    <ToastContainer autoClose={1000} position="top-right" toastStyle={{ backgroundColor: "rgba(255, 249, 166, 0.9)", color: "#000", fontSize: "20px" }} />
                </div>
            </div>
        </div>
    );
};

export default SIngleQuiz;

