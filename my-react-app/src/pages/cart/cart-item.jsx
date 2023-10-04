import React from 'react';

export const CartItem =()=>{

    const {id,productName,price,productImage} = props.data;
    return (
        <div  className='cart-items'> 
           <img src= {productImage}/>
           <div className='description'> 
           <p>
            <b>
                {productName}
            </b>
           </p>
           <p> ${price}</p>
           </div>
        </div>
    )
}