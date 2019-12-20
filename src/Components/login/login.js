import React from 'react';
import './login.css';

const Login=()=>{
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
                                <form className="login-form" action="./Components/home/home.js" method="post">
                                    <div className="form-group">
                                        <label for="username">Username</label>
                                        <input name="username" type="text" className="form-input" id="username" value required></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        <input name="password" type="password" className="form-input" id="password" value required></input>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="submit-btn">LOGIN</button>
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
    )
}

export default Login;