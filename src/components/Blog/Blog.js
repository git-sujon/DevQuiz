import React from 'react';
import { useLoaderData } from 'react-router-dom';

import BlogPost from '../BlogPost/BlogPost';
const Blog = () => {
    const blogPosts = useLoaderData()
    // console.log(blogPosts)
    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="grid grid-cols-3 gap-4 ">
                    {
                        blogPosts.map(blogPost => <BlogPost key={blogPost.id} blogPost={blogPost}></BlogPost>)
                    }



                </div>
            </div>
        </section>
    );
};

export default Blog;