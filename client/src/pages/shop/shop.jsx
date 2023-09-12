import React from "react";
import {PRODUCTS} from "../../products.js"
import Product from './product'
import "./shop.css"
function shop() {
return <div className="shop" >
    <div className="shopTitle">
        <h1>Ankit Shop</h1>
    </div>
    <div className="products">
    {PRODUCTS.map((product)=>(
        <Product
        data={product}
        />
    ))}</div>
</div>
}
export default shop