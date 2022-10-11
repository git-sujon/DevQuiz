import React from 'react';
import cover from '../../Images/FAQ (1).webp'
const Blog = () => {
    return (
        <ul className='container lg:px-16 py-8'>
            <img src={cover} alt="" />
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
            <li>
                <div className=''>
                    <div class="flex flex-wrap justify-start overflow-hidden text-gray-700 ">
                        <label class="grow px-4 py-3 font-medium border text-4xl" for="collapse">What is the purpose of React Router?</label>
                        <input class="peer mx-4 my-3  appearance-none rounded border text-gray-800 accent-gray-800 opacity-0" type="checkbox" name="collapse" id="collapse" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45 w-12 h-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                        <div class="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
                            <div className='text-2xl'>
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
                </div>
            </li>

        </ul>
    );
};

export default Blog;