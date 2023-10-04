import React, { useContext } from "react";
import {ShopContext} from "../../context/shop-context"
import {PRODUCTS} from "../../products"
import {CartItem} from "./cart-item"
import "./cart.css"
export const Cart = () =>{
    const {cartItems} = useContext(ShopContext)
    return <div className="cart"> 
    <div>
        <h1>
            Your Cart Items
        </h1>
        <div className="cardItems"> 
         {PRODUCTS.map((product)=>{
            if(cartItems[product.id]!==0){
              return < CartItem data={product} />  
            }
         })}
        </div>
    </div>
    </div>
}