import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/assets/style.css";
import "../src/assets/animate.css";
import "../src/assets/bootstrap.min.css";
import "../src/assets/search.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Archive from "./components/Archive";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Singleblog from "./components/Pages/Singleblog";
import AddBlog from "./components/Blogs/AddBlog";
import Elements from "./components/Pages/Elements";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/addBlog" element={<AddBlog />}/>
          <Route path="/pages/singleblog" element={<Singleblog />} />  
          <Route path="/pages/elements" element={<Elements />} />                 
        </Routes>   
      </main>
      <Footer />     
    </Router>
  );
}

export default App;

