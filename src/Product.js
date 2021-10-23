import { TitleOutlined } from '@material-ui/icons'
 /* import React, { useState } from 'react'   */
import './Product.css'

function Product({id,title,image,price,rating}){


 /*  const [{basket} , dispatch] = useStateVlaue();
consle.log('basket content',basket)
    const addToBasket =()=>{ 
        dispatch({
   type:'ADD_TO_BASKET',
   item: {
       id: id,
       title: title ,
      image:image,
      price: price ,
      rating:rating
   } })
   
} */
    
    return(
        <div className="product">
     <div className="product__info">
     <p>{title}</p>
     <p className="product__price">
         <small>$</small>
         <strong>{price}</strong></p>
        
     </div>
     <img src={image} alt=""/>
     <button className="btn btn-n">Buy Product</button>
        </div> 
 
 )
} 

export default Product;