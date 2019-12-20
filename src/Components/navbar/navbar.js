import React from 'react';
import './navbar.css'

const Navbar=()=>{
    return(
        <nav className="navbar">
            <div className="container">
                <a className="navbar-brand" href="./Components/home/home.js">
                    <h1 className="title">PRODUCT ADMIN</h1>
                </a>
                <button className="navbar-toggle toggle">
                    <i className="fas fa-bars tm-nav-icon"></i>
                </button>
                <div className="navbar-collapse collapse show">
                    <ul className="navbar-nav nav">
                        <li className="nav-item item">
                            <a className="nav-link link" href="./Components/home/home.js">
                                <i className="fas fa-tachometer-alt"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li className="nav-item item">
                            <a className="nav-link link" href="./Components/home/home.js">
                                <i className="fas fa-shopping-cart"></i>
                                <p>Products</p>
                            </a>
                        </li>
                        <li className="nav-item item">
                            <a className="nav-link link" href="./Components/home/home.js">
                                <i className="fas fa-user"></i>
                                <p>Accounts</p>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav nav">
                        <li className="nav-item item">
                            <a className="nav-link link" href="./Components/home/home.js">
                                <div className="admin">Admin, <b>Logout</b></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;