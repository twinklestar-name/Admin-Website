import React, { Component } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component{

    state={
        loggedInStatus:localStorage.getItem('userLoggedInStatus')
    }

    render(){

        var userLoggedOut=()=>{
            localStorage.setItem('userLoggedInStatus',false)
        }

    return(
        <nav className="navbar">
            <div className="container">
                <a className="navbar-brand">
                    <h1 className="title">PRODUCT ADMIN</h1>
                </a>
                <button className="toggle">
                    <i className="fas fa-bars tm-nav-icon"></i>
                </button>
                <div className="collapse">
                    <ul className="nav">
                        <li className="item">
                        <Link to={'/home'}><div className="link">
                                <i className="fas fa-tachometer-alt"></i>
                                <p>Dashboard</p>
                            </div>
                        </Link>
                        </li>
                        <li className="item">
                            <Link to={'/product'}><div className="link">
                                <i className="fas fa-shopping-cart"></i>
                                <p>Products</p>
                                </div>
                            </Link>
                        </li>
                        <li className="item">
                        <Link to={'/account'}><div className="link">
                                <i className="fas fa-user"></i>
                                <p>Accounts</p>
                            </div>
                        </Link>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className="item">
                        <Link to={'/'}><div className="link" onClick={userLoggedOut()}>
                            <div className="admin">Admin,{this.state.loggedInStatus?<b>Logout</b>:<b>Login</b>} </div>
                            </div>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )}
}

export default Navbar;