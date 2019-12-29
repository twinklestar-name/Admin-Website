import React,{Component} from 'react';
import './categories.css';

class Categories extends Component{

    state={
        data:JSON.parse(localStorage.getItem("Response")).productsPage.categories
    }
    
    onDeleteIconClick=(e)=>{
        var array=this.state.data
        array.splice(e.target.id,1)
        this.setState({data:array})
        var object=JSON.parse(localStorage.getItem("Response"))
        object.productsPage.categories=array
        localStorage.setItem("Response",JSON.stringify(object))  
    }

    render(){
        return(
            <div>
                    {this.state.data.map((item,pos)=>{
                        return(
                            <tbody className="category sep-line" key={pos}>
                            <tr >
                               <td>{item}</td>
                               <td>
                                   <a>
                                      <i id={pos} className="far fa-trash-alt tm-product-delete-icon" onClick={this.onDeleteIconClick}></i>
                                   </a>
                               </td>
                           </tr>
                        </tbody>
                        )
                    })}
            </div>
        )
    }

}

export default Categories;
