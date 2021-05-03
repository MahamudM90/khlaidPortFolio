import React from 'react';
import { blogs } from '../../PortfolioData';
import BlogsCard from '../BlogsCard/BlogsCard';


const Blogs = () => {
    return (
        <div className="container mb-5 ">
            <h2 className="text-uppercase">{blogs.title}</h2>
            <p className="text-uppercase">{blogs.subTitle}</p>
            <div className="row">
                {
                    blogs.blogs.map((blog, index) => <BlogsCard blog={blog} id={index} />)
                }
            </div>
        </div>
    );
};

export default Blogs;