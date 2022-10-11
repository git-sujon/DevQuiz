import React from 'react';
import cover from '../../Images/FAQ (2).png'
const Blog = () => {
    return (
        <div className=''>
            <img className='mx-auto ' src={cover} alt="" />
            <ul className='list-decimal text-4xl container lg:px-16 py-8 '>
                <li>
                    <div className='mt-16 '>
                        <div class=" text-gray-700 text-4xl ">
                            <p class="grow px-4 py-3 font-medium border mb-8" for="collapse">How does Context api work?</p>

                            <div className='text-2xl ml-8 '>
                                <p >
                                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                                </p>
                                <br />
                                <p>
                                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                                </p>
                            </div>
                        </div>
                    </div>

                </li>
                {/* 2nd Question  */}

                <li>
                    <div className='mt-16 '>
                        <div class=" text-gray-700 text-4xl ">
                            <p class="grow px-4 py-3 font-medium border mb-8" for="collapse">What is the purpose of React Router?</p>

                            <div className='text-2xl ml-8 '>
                            <p >
                                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                                    </p>
                                    <br />
                                    <p>
                                        React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.
                                    </p>
                            </div>
                        </div>
                    </div>

                </li>
                {/* 3rd Question  */}

                <li>
                    <div className='mt-16 '>
                        <div class=" text-gray-700 text-4xl ">
                            <p class="grow px-4 py-3 font-medium border mb-8" for="collapse">What is useRef()?</p>

                            <div className='text-2xl ml-8 '>
                            <p >
                            <strong>useRef(initialValue)</strong> is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.
                                    </p>
                                    <br />
                                    <p>
                                    It's returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. 
                                    </p>
                            </div>
                        </div>
                    </div>

                </li>











               

            </ul>


        </div>
    );
};

export default Blog;