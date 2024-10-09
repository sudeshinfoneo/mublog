import React, { useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog 1",
      content: "Add blog functionality to your website.",
      date: "October 9, 2024",
    },
    {
      id: 2,
      title: "Blog 2",
      content: "Add blog functionality to your website.",
      date: "October 5, 2024",
    },
    {
      id: 3,
      title: "Blog 3",
      content: "Add blog functionality to your website.",
      date: "September 30, 2024",
    },
  ]);

  const addNewBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Recent Blog Posts</h2>
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-primary text-white">
                <h5 className="card-title">{blog.title}</h5>
              </div>
              <div className="card-body">
                <p>{blog.content.substring(0, 100)}...</p>
              </div>
              <div className="card-footer bg-light">
                <small className="text-muted">Published on {blog.date}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to="/addBlog" className="btn btn-success mt-3" onClick={(e) => addNewBlog(e)}>Add New Blog</Link>
      </div>
    </div>
  );
};

export default Blogs;
