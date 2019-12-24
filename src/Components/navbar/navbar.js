import React, { Component } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component{

    state={
        //loggedInStatus:localStorage.getItem('userLoggedInStatus')==='true',
        displayMenu:false,
        width:window.innerWidth
    }

    /*userLoggedOut=()=>{
        localStorage.setItem('userLoggedInStatus',false)
        this.setState({loggedInStatus:false})
    }*/

    render(){

        var displayCollapse=()=>{
            this.setState({displayMenu:!this.state.displayMenu})
            console.log(this.state.width)
        }

    return(
        <nav className="navbar">
            <div className="container">
                <a className="navbar-brand">
                    <h1 className="title">PRODUCT ADMIN</h1>
                </a>
                <button className="toggle" onClick={displayCollapse}>
                    <i className="fas fa-bars tm-nav-icon"></i>
                </button>
                {this.state.width<=1000?(this.state.displayMenu?<div className="collapse">
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
                        <Link to={'/'}><div className="link" onClick=''>
                        {this.props.userLoggedInStatus?<div className="admin">Admin,<b>Logout</b></div>:<div className="admin">Admin,<b>Login</b></div>}
                            </div>
                        </Link>
                        </li>
                    </ul>
                </div>:null):<div className="collapse">
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
                        {this.props.userLoggedInStatus?
                        <Link to={'/'}><div className="link" onClick=''>
                        <div className="admin">Admin,<b>Logout</b></div>
                        </div></Link>
                        :
                        <Link to={'/'}><div className="link" onClick=''>
                        <div className="admin">Admin,<b>Login</b></div>
                        </div></Link>}
                        </li>
                    </ul>
                </div>}
            </div>
        </nav>
    )}}

    const mapGlobalStateToProps=(globalState)=>{
        return{
            userLoggedInStatus:globalState.loggedInStatus
        }
    }


export default connect(mapGlobalStateToProps)(Navbar);