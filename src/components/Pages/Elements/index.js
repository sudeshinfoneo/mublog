import React, { useState } from "react";

const Elements = () => {
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

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Recent Blog Posts</h2>
        <div className="row">
          {blogs.map((blogs) => (
            <>
              <div className="col-md-4 mb-4" key={blogs.id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-header bg-success text-white">
                    <h5 className="card-title" style={{textAlign: "center"}}>{blogs.title}</h5>
                  </div>
                  <div className="card-body" >
                    <p style={{color: "black"}}>{blogs.content.substring(0, 100)}...</p>
                  </div>
                  <div className="card-footer bg-light" style={{textAlign: "right"}}>
                    <small className="text-muted">Published on {blogs.date}</small>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};


export default Elements;
