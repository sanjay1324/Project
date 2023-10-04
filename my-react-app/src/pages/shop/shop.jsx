import React from "react";
import { PRODUCTS} from "../../products";
import { Product } from "./product";
import {} from "./shop.css";
 export const Shop = () =>{
    return <div className="shop">  
    <div>
        <h1>Sanjay Computers</h1>

    </div>
    <div className="products">
        {PRODUCTS.map((product)=>(
            <Product data={product}/>
        ))}

    </div>
    
    </div>
 }