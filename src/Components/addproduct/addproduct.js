import React, { Component } from 'react';
import './addproduct.css';
import {Link} from 'react-router-dom';

class Addproduct extends Component{

    state={
        pdtnameField:false,
        descField:false,
        categoryField:false,
        dateField:false,
        unitsField:false
    }

    upi=()=>{
        alert('upload pdt img')
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.pdtnameField && this.state.descField && this.state.dateField && this.state.unitsField)
        {
            this.props.history.push('/product');
        }
    }

    onInputChange=(e,name)=>{
        if(name==='productname'){
            e.target.value.length>0?this.setState({pdtnameField:true}):this.setState({pdtnameField:false})
            localStorage.setItem('productname',e.target.value)
        }
        else if(name==='description'){
            e.target.value.length>0?this.setState({descField:true}):this.setState({descField:false})
            localStorage.setItem('description',e.target.value)
        }
        else if(name==='category'){
            e.target.value.length>0?this.setState({categoryField:true}):this.setState({categoryField:false})
            localStorage.setItem('category',e.target.value)
        }
        else if(name==='expirydate'){
            e.target.value.length>0?this.setState({dateField:true}):this.setState({dateField:false})
            localStorage.setItem('expirydate',e.target.value)
        }
        else if(name==='unitsinstocks'){
            e.target.value.length>0?this.setState({unitsField:true}):this.setState({unitsField:false})
            localStorage.setItem('unitsinstocks',e.target.value)
        }
        var newProduct={
            name:localStorage.getItem('productname'),
            stock:localStorage.getItem('unitsinstocks'),
            unitSold:localStorage.getItem('description'),
            expireDate:localStorage.getItem('expirydate'),
        }

        console.log(JSON.stringify(newProduct))
        localStorage.setItem('NewProduct',JSON.stringify(newProduct))
  }

   onAddPdtBtnClick=()=>{
       var pdtlist=JSON.parse(localStorage.getItem('Response')).productsPage.products;
       var list=JSON.parse(localStorage.getItem('NewProduct'));
       var newPdtList=(pdtlist).push(JSON.parse(localStorage.getItem('NewProduct')));
       console.log(list)
       console.log(pdtlist)
       var object=JSON.parse(localStorage.getItem("Response"))
        object.productsPage.products=pdtlist;
       localStorage.setItem("Response",JSON.stringify(object))  
       console.log(JSON.parse(localStorage.getItem('Response')))
   }

    render(){
    return(
        <div className="add-page">
            <div className="extra-space">hi</div>
            <div className="add-container">
                <div>
                    <h2>Add Product</h2>
                </div>
                <div className="sections-con">
                    <div className="detail-section">
                        <form className="add-form" onSubmit={this.handleSubmit}>
                            <div>
                                <label for="name">Product Name</label>
                                <input id="name" name="name" type="text" onInput={(e)=>this.onInputChange(e,'productname')} required></input>
                            </div>
                            <div>
                                <label for="description">Description</label>
                                <textarea rows="9" onInput={(e)=>this.onInputChange(e,'description')} required></textarea>
                            </div>
                            <div>
                                <label for="category">category</label>
                                <select id="category" className="select-cat" onInput={(e)=>this.onInputChange(e,'category')} required>
                                    <option value="0">Select Category</option>
                                    <option value="1">New Arrival</option>
                                    <option value="2">Most Popular</option>
                                    <option value="3">Trending</option>
                                </select>
                            </div>
                            <div className="inputs-con">
                            <div>
                                <label for="expiry_date">Expire Date</label>
                                <input id="expiry_date" name="expiry_date" type="date" required onInput={(e)=>this.onInputChange(e,'expirydate')}></input>
                            </div>
                            <div>
                                <label for="stock">Units In Stock</label>
                                <input id="stock" name="stock" type="number" onInput={(e)=>this.onInputChange(e,'unitsinstocks')} required></input>
                            </div>
                            </div>
                            <div>
                            <button type="submit" className="add-pdt-btn" onClick={this.onAddPdtBtnClick}>ADD PRODUCT NOW</button>
                            </div>
                            </form>
                    </div>
                    <div className="img-section">
                        <div className="upload-img">
                            <i className="fas fa-cloud-upload-alt tm-upload-icon"></i>
                        </div>
                        <div>
                            <input id="fileInput" type="file"></input>
                            <input type="button" className="upload-btn" value="UPLOAD PRODUCT IMAGE" onClick={this.upi}></input>
                        </div>
                    </div>
                </div>
                
               
            </div>
            <div className="extra-space">hi</div>
        </div>
    )}}

    export default Addproduct;