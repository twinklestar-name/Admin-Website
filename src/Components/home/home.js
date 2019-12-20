import React from 'react';
import './home.css'

const Dashboard=()=>{
    return(
            <div className="dash-container">
                <div className="dash-row">
                    <p className="dash-title">welcome back,<b>Admin</b></p>
                </div>
                <div className="dash-content">
                    <div className="con">
                        <div className="con-block">
                            <h2 className="con-title">Latest Hits</h2>
                            <canvas id="lineChart" width="581" height="290"></canvas>
                        </div>
                    </div>
                    <div className="con">
                        <div className="con-block">
                            <h2 className="con-title">Perfomance</h2>
                            <canvas id="barChart" width="581" height="290"></canvas>
                        </div>
                    </div>
                    <div className="con">
                        <div className="con-block">
                            <h2 className="con-title">Storage Information</h2>
                            <canvas id="pieChart" width="581" height="290"></canvas>
                        </div>
                    </div>
                    <div className="con">
                        <div className="con-block">
                            <h2 className="con-title">Notification List</h2>
                            <canvas id="lineChart" width="581" height="290"></canvas>
                        </div>
                    </div>
                    <div className="order-list">
                        <h2 className="ol-title">Order List</h2>
                    </div>
                </div>
                <div className="extra-space">hi</div>
            </div>

          );
    }

    export default Dashboard;