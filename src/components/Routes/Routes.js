import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Main/Main'
import Blog from '../Blog/Blog';
import ErrorPage from '../ErrorPage/ErrorPage';
import Home from '../Home/Home';
import Quiz from '../Quiz/Quiz';
import Login from '../Login/Login';
import QuizDetails from '../QuizDetails/QuizDetails';
import Analytics from '../Analytics/Analytics';
import Profile from '../Profile/Profile';

const Routes = () => {
    const router= createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            errorElement:<ErrorPage></ErrorPage>,
            loader: ()=> fetch(`https://openapi.programming-hero.com/api/quiz`),
            children: [
                {   
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/quiz',
                    element:<Quiz></Quiz>
                },
                {
                    path:'/blog',
                    element:<Blog></Blog>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                
                {
                    path:'/analytics',
                    element:<Analytics></Analytics>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/profile',
                    element:<Profile></Profile>
                },
                {
                    path:`quiz/:id`,
                    element:<QuizDetails></QuizDetails>,
                    loader: ({params})=> fetch (` https://openapi.programming-hero.com/api/quiz/${params.id}`)
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Routes;