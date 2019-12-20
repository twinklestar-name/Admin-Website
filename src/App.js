import React, { Component }  from 'react';
import classes from './App.module.css';
import Navbar from './Components/navbar/navbar';
import Footer from './Components/footer/footer';
import Login from './Components/login/login';
import Dashboard from './Components/home/home';
import Product from './Components/product/product';
import Account from './Components/account/account';
import Addproduct from './Components/addproduct/addproduct';
import axios from 'axios';


class App extends Component {

  componentDidMount(){
    axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
    .then(response=>{
      console.log(response.data)
      localStorage.setItem("Response",JSON.stringify(response.data))
    })
    .catch(err=>{
      console.log(err)
    })
  }

  

  render(){
  return (
    <div className={classes.App}>
      <Navbar/>
      <Addproduct/>
      <Product/>
      <Account/>
      <Dashboard/>
      <Login/>
      <Footer/>
    </div>
  );
}}

export default App;
