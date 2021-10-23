import React, { useState } from 'react'
import './ProductCard.css'
 /* import {useStateValue}  from './StateProvider'    */

function ProductCard({id,title,image,price,rating}){

   /* const [{basket,dispatch}]= useStateValue();   */

    const RemoveItem=()=>{
     /*   dispatch({
            type:'REMOVE_FROM_CARD',
            id:id
        })
    }  */

  return(
    <div className="product-card">
  
<img src={image} alt="" className="product-card__image"/>
   <div className="product-card__info">
       <p className="product-card__title">
           {title}
       </p>
       <p className="product-card__price">
          $ {price}
       </p>
     
      <div className="product-card__rating">
          {

              Array(rating).fill().map((_)=>{

                <span>*</span>
              })
          }

      </div>
      </div>
   <button onClick={RemoveItem}>Remove from card</button>

    </div>

  )
} }

export default ProductCard
