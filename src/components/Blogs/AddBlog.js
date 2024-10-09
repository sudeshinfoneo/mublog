import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = ({ addBlog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    if (title.length < 5) {
      console.log("Title is too short");
      return;
    }
    if (content.length < 20) {
      console.log("Title is too short");
      return;
    }
    if (!date) {
      console.log("Date is not add");
      return;
    }

    const newBlog = {
      id: Math.random(), 
      title,
      content,
      date,
    };

    addBlog(newBlog);
    setTitle(""); 
    setContent(""); 
    setDate("");  
    navigate("/"); 
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Blog Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            className="form-control"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
