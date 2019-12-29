import React, { Component } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component{

    state={
        //loggedInStatus:localStorage.getItem('userLoggedInStatus')==='true',
        displayMenu:false,
        width:window.innerWidth,
        activeDashboard:false,
        activeProduct:false,
        activeAccount:false
    }

    /*userLoggedOut=()=>{
        localStorage.setItem('userLoggedInStatus',false)
        this.setState({loggedInStatus:false})
    }*/

     displayCollapse=()=>{
        this.setState({displayMenu:!this.state.displayMenu})
        console.log(this.state.width)
    }

    onActiveDashboardClk=()=>{
        this.setState({activeDashboard:true,activeProduct:false,activeAccount:false})
    }
    onActiveProductClk=()=>{
        this.setState({activeProduct:true,activeDashboard:false,activeAccount:false})
    }
    onActiveAccountClk=()=>{
        this.setState({activeAccount:true,activeDashboard:false,activeProduct:false})
    }

    render(){

    return(
        <nav className="navbar">{console.log(window.innerWidth)}
            <div className="container">
                <a className="navbar-brand">
                    <h1 className="title">PRODUCT ADMIN</h1>
                </a>
                <button className="toggle" onClick={this.displayCollapse}>
                    <i className="fas fa-bars tm-nav-icon"></i>
                </button>
                {this.state.width<=1150?(this.state.displayMenu?<div className="collapse">
                    <ul className="nav">
                        <li className="item" >
                        {this.props.userLoggedInStatushi?
                        <Link to={'/home'} onClick={this.onActiveDashboardClk}>
                            <div className={[this.state.activeDashboard?'active':'link'].join(' ')}>
                                <i className="fas fa-tachometer-alt"></i>
                                <p>Dashboard</p>
                            </div>
                        </Link>
                        :
                        <Link to={'/login'} onClick={this.onActiveDashboardClk}>
                            <div className={[this.state.activeDashboard?'active':'link'].join(' ')}>
                                <i className="fas fa-tachometer-alt"></i>
                                <p>Dashboard</p>
                            </div>
                        </Link>
                        }
                        </li>
                        <li className="item">
                        {this.props.userLoggedInStatushi?
                        <Link to={'/product'} onClick={this.onActiveProductClk}>
                            <div className={[this.state.activeProduct?'active':'link'].join(' ')}>
                                <i className="fas fa-shopping-cart"></i>
                                <p>Products</p>
                            </div>
                        </Link>
                        :
                        <Link to={'/login'} onClick={this.onActiveProductClk}>
                            <div className={[this.state.activeProduct?'active':'link'].join(' ')}>
                                <i className="fas fa-shopping-cart"></i>
                                <p>Products</p>
                            </div>
                        </Link>}
                        </li>
                        <li className="item">
                        {this.props.userLoggedInStatushi?
                        <Link to={'/account'} onClick={this.onActiveAccountClk}>
                            <div className={[this.state.activeAccount?'active':'link'].join(' ')}>
                                <i className="fas fa-user"></i>
                                <p>Accounts</p>
                            </div>
                        </Link>
                        :
                        <Link to={'/login'} onClick={this.onActiveAccountClk}>
                            <div className={[this.state.activeAccount?'active':'link'].join(' ')}>
                                <i className="fas fa-user"></i>
                                <p>Accounts</p>
                            </div>
                        </Link>}
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className="item">
                        <Link to={'/'}><div className="link">
                            {console.log(this.props.userLoggedInStatushi)}
                        {this.props.userLoggedInStatushi?
                        <div className="admin" onClick={this.props.onUserLoggedOut}>Admin,<b>Logout</b></div>
                        :
                        <div className="admin" /*onClick={this.props.onUserLoggedOut()}*/><b></b></div>}
                            </div>
                        </Link>
                        </li>
                    </ul>
                </div>:null):<div className="collapse">
                    <ul className="nav">
                        <li className="item">
                        {this.props.userLoggedInStatushi?
                        <Link to={'/home'} onClick={this.onActiveDashboardClk}>
                            <div className={[this.state.activeDashboard?'active':'link'].join(' ')}>
                                <i className="fas fa-tachometer-alt"></i>
                                <p>Dashboard</p>
                            </div>
                        </Link>
                        :
                        <Link to={'/login'} onClick={this.onActiveDashboardClk}>
                            <div className={[this.state.activeDashboard?'active':'link'].join(' ')}>
                                <i className="fas fa-tachometer-alt"></i>
                                <p>Dashboard</p>
                            </div>
                        </Link>
                        }
                        </li>
                        <li className="item">
                        {this.props.userLoggedInStatushi?
                        <Link to={'/product'} onClick={this.onActiveProductClk}>
                            <div className={[this.state.activeProduct?'active':'link'].join(' ')}>
                                <i className="fas fa-shopping-cart"></i>
                                <p>Products</p>
                            </div>
                        </Link>
                        :
                        <Link to={'/login'} onClick={this.onActiveProductClk}>
                            <div className={[this.state.activeProduct?'active':'link'].join(' ')}>
                                <i className="fas fa-shopping-cart"></i>
                                <p>Products</p>
                            </div>
                        </Link>}
                        </li>
                        <li className="item">
                        {this.props.userLoggedInStatushi?
                        <Link to={'/account'} onClick={this.onActiveAccountClk}>
                            <div className={[this.state.activeAccount?'active':'link'].join(' ')}>
                                <i className="fas fa-user"></i>
                                <p>Accounts</p>
                            </div>
                        </Link>
                        :
                        <Link to={'/login'} onClick={this.onActiveAccountClk}>
                            <div className={[this.state.activeAccount?'active':'link'].join(' ')}>
                                <i className="fas fa-user"></i>
                                <p>Accounts</p>
                            </div>
                        </Link>}
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className="item">
                        <Link to={'/'}><div className="link" >
                        {this.props.userLoggedInStatushi?
                        <div className="admin" onClick={this.props.onUserLoggedOut}>Admin,<b>Logout</b></div>
                        :
                        <div className="admin" /*onClick={this.props.onUserLoggedOut()}*/><b></b></div>}
                            </div>
                        </Link>
                        </li>
                    </ul>
                </div>}
            </div>
        </nav>
    )}}

    const mapGlobalStateToProps=(globalState)=>{
        return{
            userLoggedInStatushi:globalState.loggedInStatus,
            //displayMenu:globalState.displayMenu,
            //width:globalState.width
        }
    }

    const mapDispatchToProps=(dispatch)=>{
        return{
            onUserLoggedOut: ()=>{dispatch({type:'USER_LOGOUT'})},
            //onDisplayMenu: ()=>{dispatch({type:'MENU_SHOW'})}
        }
    }


export default connect(mapGlobalStateToProps,mapDispatchToProps)(Navbar);