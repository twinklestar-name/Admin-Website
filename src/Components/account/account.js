import React, { Component } from 'react';
import './account.css';
//import { connect } from 'react-redux';

class Account extends Component{

    state={
        accountType:'',
        accountName:'',
        accountEmail:'',
        accountPassword:'',
        accountPhone:'',
        pic:'https://i.pinimg.com/originals/3b/c9/ba/3bc9bacfb9d042585160732260fe4c63.png'
    }

    onSelectAccount=(e)=>{
    var account=e.target.value
    var accountData=JSON.parse(localStorage.getItem("Response")).accountsPage
    
    switch(account)
    {
        case 'Admin':this.setState({accountName:accountData.Admin.name})
                     this.setState({accountEmail:accountData.Admin.email})
                     this.setState({pic:accountData.Admin.profilePic})
                     this.setState({accountPassword:accountData.Admin.password})
                     this.setState({accountPhone:accountData.Admin.phone})
                     this.setState({accountType:account})
                     break;
        case 'Editor':this.setState({accountName:accountData.Editor.name})
                     this.setState({accountEmail:accountData.Editor.email})
                     this.setState({pic:accountData.Editor.profilePic})
                     this.setState({accountPassword:accountData.Editor.password})
                     this.setState({accountPhone:accountData.Editor.phone})
                     this.setState({accountType:account})
                     break;
        case 'Merchant':this.setState({accountName:accountData.Merchant.name})
                     this.setState({accountEmail:accountData.Merchant.email})
                     this.setState({pic:accountData.Merchant.profilePic})
                     this.setState({accountPassword:accountData.Merchant.password})
                     this.setState({accountPhone:accountData.Merchant.phone})
                     this.setState({accountType:account})
                     break;
        case 'Customer':this.setState({accountName:accountData.Customer.name})
                     this.setState({accountEmail:accountData.Customer.email})
                     this.setState({pic:accountData.Customer.profilePic})
                     this.setState({accountPassword:accountData.Customer.password})
                     this.setState({accountPhone:accountData.Customer.phone}) 
                     this.setState({accountType:account}) 
     }
    }

    onInputChange=(e,name)=>{
        if(name==='name'){
            this.setState({accountName:e.target.value})
        }
        else if(name==='email'){
            this.setState({accountEmail:e.target.value})
        }
        else if(name==='password'){
            this.setState({accountPassword:e.target.value})
        }
        else if(name==='phone'){
            this.setState({accountPhone:e.target.value})
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        var accountData=JSON.parse(localStorage.getItem("Response")).accountsPage
        var account=this.state.accountType
        console.log(accountData)

        switch(account)
    {
        case 'Admin': accountData.Admin.name=this.state.accountName
                        accountData.Admin.email=this.state.accountEmail
                        accountData.Admin.password=this.state.accountPassword
                        accountData.Admin.phone=this.state.accountPhone
                    break;
        case 'Editor': accountData.Editor.name=this.state.accountName
                        accountData.Editor.email=this.state.accountEmail
                        accountData.Editor.password=this.state.accountPassword
                        accountData.Editor.phone=this.state.accountPhone
                     break;
        case 'Merchant':  accountData.Merchant.name=this.state.accountName
                            accountData.Merchant.email=this.state.accountEmail
                            accountData.Merchant.password=this.state.accountPassword
                            accountData.Merchant.phone=this.state.accountPhone
                     break;
        case 'Customer':  accountData.Customer.name=this.state.accountName
                            accountData.Customer.email=this.state.accountEmail
                            accountData.Customer.password=this.state.accountPassword
                            accountData.Customer.phone=this.state.accountPhone
     }
     localStorage.setItem('Response',accountData)
    }

    onDeleteAccountClick=()=>{
        this.setState({pic:'https://i.pinimg.com/originals/3b/c9/ba/3bc9bacfb9d042585160732260fe4c63.png'})
        var accountData=JSON.parse(localStorage.getItem("Response")).accountsPage
        var account=this.state.accountType
        console.log(accountData)

        switch(account)
    {
        case 'Admin': /*accountData.Admin=''*/
                    this.setState({accountName:''})
                    this.setState({accountEmail:''})
                    this.setState({accountPassword:''})
                    this.setState({accountPhone:''})
                    this.setState({accountType:account})
                    break;
        case 'Editor'://accountData.Editor=''
                    this.setState({accountName:''})
                    this.setState({accountEmail:''})
                    this.setState({accountPassword:''})
                    this.setState({accountPhone:''})
                    this.setState({accountType:account})
                    break;
        case 'Merchant'://accountData.Merchant=''
                        this.setState({accountName:''})
                        this.setState({accountEmail:''})
                        this.setState({accountPassword:''})
                        this.setState({accountPhone:''})
                        this.setState({accountType:account})
                        break;
        case 'Customer'://accountData.Customer=''
                        this.setState({accountName:''})
                        this.setState({accountEmail:''})
                        this.setState({accountPassword:''})
                        this.setState({accountPhone:''})
                        this.setState({accountType:account})
                        break;
     }
     localStorage.setItem('Response',accountData)
    }

    onDeleteIconClick=()=>{
        this.setState({pic:'https://i.pinimg.com/originals/3b/c9/ba/3bc9bacfb9d042585160732260fe4c63.png'})
        var accountData=JSON.parse(localStorage.getItem("Response")).accountsPage
        var account=this.state.accountType
        console.log(accountData)

        switch(account)
    {
        case 'Admin': accountData.Admin.profilePic=''
                     break;
        case 'Editor':accountData.Editor.profilePic=''
                     break;
        case 'Merchant':accountData.Merchant.profilePic=''
                     break;
        case 'Customer':accountData.Customer.profilePic=''
     }
     localStorage.setItem('Response',accountData);

    }

    onUpload=(e)=>{
        console.log(e.target.value)
        var newImage=e.target.value
        this.setState({pic:`./${newImage}`})
    }

    render(){
    return(
         <div className="account-page">
             <div className="extra-space">hi</div>
             <div className="acc-container">
                 <div className="loa-con">
                     <h2>List of Accounts</h2>
                     <p>Accounts</p>
                     <select className="dropdown" value={this.state.accountType} onInput={(e)=>this.onSelectAccount(e)}>
                         <option value="0">Select Account</option>
                         <option value="Admin">Admin</option>
                         <option value="Editor">Editor</option>
                         <option value="Merchant">Merchant</option>
                         <option value="Customer">Customer</option>
                     </select>
                 </div>
                 <div className="as-con">
                     <div className="avatar-con">
                         <h2>Change Avatar</h2>
                         <div className="image-con">
                         <img src={this.state.pic} alt="avatar"/>
                         <i className="far fa-trash-alt tm-product-delete-icon" onClick={this.onDeleteIconClick}></i>
                         </div>
                         <input type='file' accept="image/*" className='choose-file' onChange={(e)=>this.onUpload(e)}></input>
                         <button className="upload-pic-btn">UPLOAD NEW PHOTO</button>
                     </div>
                     <div className="set-con">
                         <h2>Account Settings</h2>
                         <form className="acc-form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="accountname">Account Name</label>
                                <input name="accountname" type="text" className="form" id="accountname" onInput={(e)=>this.onInputChange(e,'name')} value={this.state.accountName}></input>
                            </div>
                            <div className="form-group">
                                <label for="email">Account Email</label>
                                <input name="email" type="email" className="form" id="email" onInput={(e)=>this.onInputChange(e,'email')}  value={this.state.accountEmail}></input>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input name="password" type="password" className="form" id="password" onInput={(e)=>this.onInputChange(e,'password')} value={this.state.accountPassword}></input>
                            </div>
                            <div className="form-group">
                                <label for="password">Re-enter Password</label>
                                <input name="password" type="password" className="form" id="password" onInput={(e)=>this.onInputChange(e,'password')} value={this.state.accountPassword}></input>
                            </div>
                            <div className="form-group">
                                <label for="phone">Phone</label>
                                <input name="phone" type="text" className="form" id="phone" onInput={(e)=>this.onInputChange(e,'phone')} value={this.state.accountPhone}></input>
                            </div>
                            <button className="update-btn" type='submit'>UPDATE YOUR PROFILE</button>
                            <div className="form-group">
                                <button className="delete-btn" onClick={this.onDeleteAccountClick}>DELETE YOUR ACCOUNT</button>
                            </div>
                         </form>
                     </div>
                 </div>
             </div>
             <div className="extra-space">hi</div>
         </div>
    )}
    }

/*const mapGlobalStateToProps=(globalState)=>{
    return{
        accountType:globalState.accountType,
        accountName:globalState.accountName,
        accountEmail:globalState.accountEmail,
        accountPassword:globalState.accountPassword,
        accountPhone:globalState.accountPhone,
        pic:globalState.pic
    }
}*/

    
export default Account;