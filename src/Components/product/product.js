import React, { Component } from 'react';
import './product.css';
import Categories from './categories';
import ProductList from './productlist';
import {Link} from 'react-router-dom';

class Product extends Component{

    onDeleteSelectedBtnClick=(e)=>{
        let array=JSON.parse(localStorage.getItem("selectedItemsIds"))
        array.map(item=>console.log(item))
        let object=JSON.parse(localStorage.getItem("Response"))
        let tempObject=JSON.parse(localStorage.getItem("Response")).productsPage.products
        console.log(tempObject)
        array.map(item=>tempObject.splice(item,1))
        console.log(tempObject)
        object.productsPage.products=tempObject
        console.log(object)
        localStorage.setItem("Response",JSON.stringify(object))
    }

    render(){
    return(
         <div className="product-page">
             <div className="extra-space">hi</div>
             <div className="pro-container">
                 <div className="pl-con">
                     <div className="pl">
                     <ProductList/>
                     </div>
                     <Link to={'/addproduct'}><button className="add-btn">ADD NEW PRODUCT</button></Link>
                     <button className="de-se-btn" onClick={(e)=>this.onDeleteSelectedBtnClick(e)}>DELETE SELECTED PRODUCTS</button>
                 </div>
                 <div className="pc-con">
                     <div className="pc">
                         <h2>Product categories</h2>
                         <div className="right-tc">
                             <table className="r-table">
                                <tbody><Categories/></tbody>
                             </table>
                         </div>
                         <Link to={'/addproduct'}><button className="category-btn">ADD NEW CATEGORY</button></Link>
                     </div>
                 </div>
             </div>
             <div className="extra-space"></div>
         </div>
    )}
}

export default Product;