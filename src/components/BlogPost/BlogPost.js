import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ blogPost }) => {
    const { id, question, ans_p_one, ans_p_two, img, CATEGORY } = blogPost

    return (
        <div>

            <div className="p-4 border border-pink-700">
                <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={img} alt="blog" />
                    <div className="p-6">
                        <span className="tracking-widest text-xs title-font font-bold text-gray-500  border border-gray-500 py-.5 px-1">{CATEGORY}</span>
                        <h1 className="mt-2 title-font text-lg font-medium bold-gray-600 mb-1">{question}</h1>
                        <p className="leading-relaxed mb-3">{ans_p_one.slice(0, 71)}...</p>
                        <div className="flex items-center flex-wrap ">
                            <Link to='/post'> <button className="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">Read more</button></Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogPost;

let x = {
    "id": 3,
    "question": "What is useRef()?",
    "ans_p_one": " <strong>useRef(initialValue)</strong> is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.",
    "ans_p_two": "  It's returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialized to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. "
}