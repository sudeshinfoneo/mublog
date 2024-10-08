import React from "react";
import Logo from "../../assets/img/logo.png.webp";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="main_menu" style={{ backgroundColor: "gray" }}> 
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand">
                                    <img src={Logo} alt="logo" />
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse main-menu-item justify-content-center" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <Link to='/' className="nav-link">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/archive' className="nav-link">Archive</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/category' className="nav-link">Category</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/contact' className="nav-link">Contact</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link to='/page' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</Link>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <Link to='/pages/singleblog' className="dropdown-item">Single blog</Link>
                                                <Link to='/elements' className="dropdown-item">Elements</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
