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
import Singleblog from "./components/Pages/Singleblog";


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/pages/singleblog" element={<Singleblog />}/>
          
        </Routes>   
      </main>
      <Footer />     
    </Router>
  );
}

export default App;

