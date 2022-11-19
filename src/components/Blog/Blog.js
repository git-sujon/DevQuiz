import React, { useEffect, useState } from 'react';


import BlogPost from '../BlogPost/BlogPost';
const Blog = () => {
  
    const [blogPosts, setBlogposts] =useState([])
    useEffect(()=> {
        fetch ('blogData.json')
        .then(res=> res.json())
        .then(data => {
            setBlogposts(data)
        })
    }, [])


    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {
                        blogPosts?.map(blogPost => <BlogPost key={blogPost.id} blogPost={blogPost}></BlogPost>)
                    }



                </div>
            </div>
        </section>
    );
};

export default Blog;