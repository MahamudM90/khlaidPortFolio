import React from 'react';

const BlogsCard = ({ blog }) => {
    console.log(blog);
    return (
        <div class="card col m-1 shadow" style={{overflow : "hidden" , height: "100px" , wordWrap : 'break-word'}}>
            <a href={blog.url} className="blogLinks">
                <div class="card-body">
                    <h5 class="card-title">{blog.title}</h5>
                </div>
            </a>
        </div>
    );
};

export default BlogsCard;