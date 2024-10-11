import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

    const addBlogToLocalStorage = (newBlogs) => {
    console.log("blogs",localStorage.getItem("blogs"))
    const storedBlogs = localStorage.getItem("blogs")
    let blogs;
    try {
      blogs = storedBlogs ? JSON.parse(storedBlogs) : [];
    } catch (error) {
      console.error("Error parsing JSON from localStorage", error);
      blogs = [];
    }

    const updatedBlogs = [...blogs, newBlogs];
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length < 5 || content.length < 5 || !date) {
      alert("Please enter valid title, content, and date.");
      return;
    }

    const newBlogs = {
      id: uuidv4(),
      title,
      content,
      date,
    };

    addBlogToLocalStorage(newBlogs);
    setTitle("");
    setContent("");
    setDate("");
    navigate("/blogs");
  };

  return (
    <div className="container mt-4">
    <h2 className="text-center mb-4">Add a New Blog</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Blog Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Content</label>
        <textarea
          className="form-control"
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Add</button>
    </form>
  </div>
);
};

export default AddBlog;
