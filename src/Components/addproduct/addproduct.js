import React from 'react';
import './addproduct.css';

const Addproduct=()=>{
    return(
        <div className="add-page">
            <div className="extra-space">hi</div>
            <div className="add-container">
                <div>
                    <h2>Add Product</h2>
                </div>
                <div className="sections-con">
                    <div className="detail-section">
                        <form className="add-form">
                            <div>
                                <label for="name">Product Name</label>
                                <input id="name" name="name" type="text" required></input>
                            </div>
                            <div>
                                <label for="description">Description</label>
                                <textarea rows="9" required></textarea>
                            </div>
                            <div>
                                <label for="category">category</label>
                                <select id="category" className="select-cat">
                                    <option value="0">Select Category</option>
                                    <option value="1">New Arrival</option>
                                    <option value="2">Most Popular</option>
                                    <option value="3">Trending</option>
                                </select>
                            </div>
                            <div className="inputs-con">
                            <div>
                                <label for="expiry_date">Expire Date</label>
                                <input id="expiry_date" name="expiry_date" type="text"></input>
                            </div>
                            <div>
                                <label for="stock">Units In Stock</label>
                                <input id="stock" name="stock" type="text"></input>
                            </div>
                            </div>
                        </form>
                    </div>
                    <div className="img-section">
                        <div className="upload-img">
                            <i className="fas fa-cloud-upload-alt tm-upload-icon" onClick=""></i>
                        </div>
                        <div>
                            <input id="fileInput" type="file"></input>
                            <input type="button" className="upload-btn" value="UPLOAD PRODUCT IMAGE" onClick=""></input>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" className="add-pdt-btn">ADD PRODUCT NOW</button>
                </div>
            </div>
            <div className="extra-space">hi</div>
        </div>
    )}

    export default Addproduct;