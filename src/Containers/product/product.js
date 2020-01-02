import React, { Component } from 'react';
import './product.css';
import {Link} from 'react-router-dom';
import Categories from '../../Components/categories/Categories';
import ProductList from '../../Components/productList/productlist';
import Popup from '../../Components/Popup/popup';
import { connect } from 'react-redux';

class Product extends Component{

    state={
        render:''
    }
    
    onDeleteSelectedBtnClick=(e)=>{
        let object=JSON.parse(localStorage.getItem("Response"))
        let list=JSON.parse(localStorage.getItem("Response")).productsPage.products
        list=list.filter(li=>!li.selected)
        object.productsPage.products=list
        localStorage.setItem("Response",JSON.stringify(object))
        this.setState({render:true})
        //window.location.reload();
        this.forceUpdate();
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
                                 <Categories/>
                             </table>
                         </div>
                         <Link to={'/product/popup'}><button className="category-btn" onClick={this.props.onShowPopup}>ADD NEW CATEGORY</button></Link>
                         {/* {this.props.showPopup?<Popup/>:null} */}
                     </div>
                 </div>
             </div>
             <div className="extra-space"></div>
         </div>
    )}
}

const mapGlobalStateToProps=(globalState)=>{
    return{
        showPopup:globalState.showPopup
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onShowPopup: ()=>{dispatch({type:'SHOW_POPUP'})}
    }
}

export default connect(mapGlobalStateToProps,mapDispatchToProps)(Product);