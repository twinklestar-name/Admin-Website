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
import { Route, BrowserRouter, Switch }  from 'react-router-dom';


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
    <BrowserRouter>
    <div className={classes.App}>
      <Navbar/>
      <Switch>
            <Route path="/addproduct" component={Addproduct} />
            <Route path="/account" component={Account} />
            <Route path="/product" component={Product} />
            <Route path="/home" component={Dashboard} />
            <Route path="/" component={Login} />
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}}

export default App;
