import React from 'react';
import './account.css'

const Account=()=>{
    var adminPic=JSON.parse(localStorage.getItem("Response")).accountsPage.Admin.profilePic;
    return(
         <div className="account-page">
             <div className="extra-space">hi</div>
             <div className="acc-container">
                 <div className="loa-con">
                     <h2>List of Accounts</h2>
                     <p>Accounts</p>
                     <select className="dropdown">
                         <option value="0">Select Account</option>
                         <option value="1">Admin</option>
                         <option value="2">Editor</option>
                         <option value="3">Merchant</option>
                         <option value="4">Customer</option>
                     </select>
                 </div>
                 <div className="as-con">
                     <div className="avatar-con">
                         <h2>Change Avatar</h2>
                         <img src={adminPic} alt="avatar"/>
                         <i className="far fa-trash-alt tm-product-delete-icon"></i>
                         <button className="upload-pic-btn">UPLOAD NEW PHOTO</button>
                     </div>
                     <div className="set-con">
                         <h2>Account Settings</h2>
                         <form className="acc-form">
                            <div className="form-group">
                                <label for="accountname">Account Name</label>
                                <input name="accountname" type="text" className="form" id="accountname" required></input>
                            </div>
                            <div className="form-group">
                                <label for="email">Account Email</label>
                                <input name="email" type="email" className="form" id="email" required></input>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input name="password" type="password" className="form" id="password" required></input>
                            </div>
                            <div className="form-group">
                                <label for="password">Re-enter Password</label>
                                <input name="password" type="password" className="form" id="password" required></input>
                            </div>
                            <div className="form-group">
                                <label for="phone">Phone</label>
                                <input name="phone" type="number" className="form" id="phone" value required></input>
                            </div>
                            <button className="update-btn">UPDATE YOUR PROFILE</button>
                            <div className="form-group">
                                <button className="delete-btn">DELETE YOUR ACCOUNT</button>
                            </div>
                         </form>
                     </div>
                 </div>
             </div>
             <div className="extra-space">hi</div>
         </div>
    )
}
    
export default Account;