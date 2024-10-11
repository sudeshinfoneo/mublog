import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
    const defaultBlogs = [
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
  ]
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      const storedBlogs = localStorage.getItem("blogs");
      if (storedBlogs) {
        try {
          const parsedBlogs = JSON.parse(storedBlogs);
          setBlogs([...defaultBlogs, ...parsedBlogs]); 
        } catch (error) {
          console.error("Error parsing blogs from localStorage:", error);
        }
      } else {
        setBlogs(defaultBlogs);
      }
    }, []);

  const addNewBlogs = (newBlogs) => {
    const updatedBlogs = [...blogs, newBlogs];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter((blogs) => blogs.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Recent Blog Posts</h2>
        <div className="row">
          {blogs.map((blogs) => (
            <div className="col-md-4 mb-4" key={blogs.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-header bg-primary text-white">
                  <h5 className="card-title" style={{ textAlign: "center" }}>{blogs.title}</h5>
                </div>
                <div className="card-body">
                  <p style={{ color: "black" }}>
                    {blogs.content ? blogs.content.substring(0, 100) + "..." : "No content available"}
                  </p>
                </div>
                <div className="card-footer bg-light" style={{ textAlign: "left" }}>
                  <small className="text-muted">Published on {blogs.date}</small>
                  <button className="btn btn-danger btn-sm float-end" onClick={() => handleDelete(blogs.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className="text-center">
          <Link to="/addBlog" className="btn btn-primary mt-3">Add Blog</Link>
        </div>
      </div>
    </>
  );
};
export default Blogs;
