import React, { Component } from 'react';
import './login.css';

class Login extends Component{

    state={
        userField:false,
        passwordField:false,
        loggedInStatus:false
    }

    loggedInStatus=()=>{
        localStorage.setItem('userLoggedInStatus',true);
        this.setState({loggedInStatus:true})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.userField && this.state.passwordField)
        {
            this.props.history.push('/home');
        }
    }

    onInputChange=(e,name)=>{
        if(name==='username'){
            e.target.value.length>0?this.setState({userField:true}):this.setState({userField:false})
        }
        else if(name==='password'){
            e.target.value.length>0?this.setState({passwordField:true}):this.setState({passwordField:false})
        }
  }

    render(){
    return(
        <div className="login-page">
            <div className="extra-space">hi</div>
        <div className="log-container">
            <div className="row">
                <div className="col">
                    <div className="tm-bg-primary-dark">
                        <div className="row">
                            <div className="col">
                                <h2 className="log-title">Welcome to Dashboard,Login</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <form className="login-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label for="username">Username</label>
                                        <input name="username" type="text" className="form-input validate" id="username" onInput={(e)=>this.onInputChange(e,'username')} required></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        <input name="password" type="password" className="form-input validate" id="password" onInput={(e)=>this.onInputChange(e,'password')} required></input>
                                    </div>
                                    <div className="form-group">
                                    <button type="submit" className="submit-btn" onClick={this.loggedInStatus}>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="extra-space">hi</div>
        </div>
    )}
}

export default Login;