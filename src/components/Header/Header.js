import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Images/logo-1.png'
import './Header.css'
import avatar from '../../Images/me.jpg'
import { ToastContainer, toast } from 'react-toastify';



const Header = () => {
const [notifi, setNotifi] =useState(2)

    const notifiHandler =() => {
        setNotifi(0)
        toast.success(`New Update Release 🔥🔥🔥`);
        toast.success(`1000+ New Quiz Added 🔥🔥🔥`);
    }

    return (
        <header className="header-bg sticky top-0">
            <nav className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  ">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <button className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                            className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                            </path>
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                        <NavLink  to='/' className="flex items-center   " >
                            <img src={logo} style={{ height: "40px" }} alt="" />
                        </NavLink>
                        {/* <!-- Left links --> */}
                        <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">

                            <li className="nav-item p-2">
                                <NavLink style={({ isActive }) => ({
                                    border: isActive ? "2px solid black" : ''})} className=" py-1 px-2  hover:text-green-500 nav-link text-gray-500  focus:text-gray-500  font-bold" to='/home'>Home</NavLink>
                            </li>
                            <li className="nav-item p-2">
                                <NavLink style={({ isActive }) => ({
                                    border: isActive ? "2px solid black" : ''})} className=" py-1 px-2  hover:text-green-500 nav-link text-gray-500  focus:text-gray-500  font-bold " to='/quiz'>Quiz</NavLink>
                            </li>
                            <li className="nav-item p-2">
                                <NavLink style={({ isActive }) => ({
                                    border: isActive ? "2px solid black" : ''})}  className=" py-1 px-2  hover:text-green-500 nav-link text-gray-500  focus:text-gray-500  font-bold" to='/blog'>Blog</NavLink>
                            </li>
                            <li className="nav-item p-2">
                                <NavLink style={({ isActive }) => ({
                                    border: isActive ? "2px solid black" : ''})} className=" py-1 px-2  hover:text-green-500 nav-link text-gray-500  focus:text-gray-500 p-0 font-bold" to='/analytics'>Analytics</NavLink>
                            </li>
                        </ul>
                        {/* <!-- Left links --> */}
                    </div>
                    {/* <!-- Collapsible wrapper --> */}

                    {/* <!-- Right elements --> */}
                    <div className="flex items-center relative">
                        {/* <!-- Icon --> */}
                        <NavLink style={({ isActive }) => ({
                                    border: isActive ? "2px solid black" : ''})} className="font-bold py-1 px-2 text-gray-900 hover:text-gray-700 focus:text-gray-700 mr-4" to="/login">
                            Login
                        </NavLink>
                        {/* <!-- Icon --> */}
                        <Link className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4" to="/blog">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon=""
                                className="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 10 20">
                                <path d="M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.948c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.948c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385"></path>
                            </svg>
                        </Link>
                        <div className="dropdown relative">


                            <Link className="
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          mr-4
          dropdown-toggle
          hidden-arrow
          flex items-center
        " href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell"
                                    className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor"
                                        d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z">
                                    </path>
                                </svg>
                                <span onClick={notifiHandler} className="text-white bg-red-700 absolute rounded-full  ml-2 py-0 px-1 mb-4">{notifi}
                               
                                </span>
                            </Link>

                        </div>
                        <div className="">
                            <Link to='/profile'>
                                <img src={avatar} className="rounded-full"
                                    style={{ height: "40px", width: "40px" }} alt="" />
                            </Link>

                        </div>
                    </div>
                    {/* <!-- Right elements --> */}
                </div>
            </nav>
        </header>
    );
};

export default Header;