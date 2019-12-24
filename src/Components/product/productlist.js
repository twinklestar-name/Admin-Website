import React,{Component} from 'react';
import './productlist.css'

class ProductList extends Component{
    state={
        data:JSON.parse(localStorage.getItem("Response")).productsPage.products
    }
    onDeleteIconClick=(e)=>{
        let array=this.state.data
        let tempObject=JSON.parse(localStorage.getItem("Response"))
        array.splice(e.target.id,1)
        tempObject.productsPage.products=array
        localStorage.setItem("Response",JSON.stringify(tempObject))
        this.setState({data:array})
    }

    selectedItemsIds=[];

    onChkBoxClick=(e)=>{
        this.selectedItemsIds.push(e.target.id)
        localStorage.setItem('selectedItemsIds',`[${this.selectedItemsIds}]`)
    }

    // productlist=this.state.data.map((item,pos)=>{
    //     return(
    //         <tr key={pos}>
    //            <th scope="row">
    //                <input type="checkbox"></input>
    //            </th>
    //            <td scope="row">{item.name}</td>
    //            <td scope="row">{item.unitSold}</td>
    //            <td scope="row">{item.stock}</td>
    //            <td scope="row">{item.expireDate}</td>
    //            <td>
    //                <a>
    //                    <i id={pos} className="far fa-trash-alt tm-product-delete-icon" onClick={(e)=>this.onDeleteIconClick(e)}></i>
    //                </a>
    //            </td>
    //         </tr>
    //     )
    // })

    
    productlist=()=>(JSON.parse(localStorage.getItem("Response")).productsPage.products.map((item,pos)=>{
        return(
            <tr key={pos}>
               <th scope="row">
               <input id={pos} type="checkbox" class="checkbox" onClick={(e)=>this.onChkBoxClick(e)}></input>
               </th>
               <td scope="row">{item.name}</td>
               <td scope="row">{item.unitSold}</td>
               <td scope="row">{item.stock}</td>
               <td scope="row">{item.expireDate}</td>
               <td>
                   <a>
                       <i id={pos} className="far fa-trash-alt tm-product-delete-icon" onClick={(e)=>this.onDeleteIconClick(e)}></i>
                   </a>
               </td>
            </tr>
        )
    }))

    render(){
        return(
            <div className="pdtlist">
                <table className="l-table">
                             <thead>
                                 <tr>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">PRODUCT NAME</th>
                                    <th scope="col">UNIT SOLD</th>
                                    <th scope="col">IN STOCK</th>
                                    <th scope="col">EXPIRY DATE</th>
                                    <th scope="col">&nbsp;</th>
                                 </tr>
                             </thead>
                             <tbody>{
                                        this.productlist()                               
                                    }
                            </tbody>
                </table>
            </div>
            )
    }

}

export default ProductList;