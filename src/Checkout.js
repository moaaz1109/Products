
import React from 'react'
import './Checkout.css'
import Subtotal  from './Subtotal'
import ProductCard from './ProductCard'

function Checkout(){

    return(
  <div className="checkout">
      <div className="checkout__left">
{/*  <div className="ShoppingBasketTitle">
    <h2>
Items in the shopping basket
</h2>
{

basket.map(item => (  
    <ProductCard
    id={item.id}
    title={item.title}
    image={item.image}
    price={item.price}
    rating={item.rating}
    />
))

}
</div>  */}

   <h2 className="checkout__title">Your shopping basket is empty</h2>
   <p>You have no items in the basket . Buy now</p>
      </div>
      <div className="checkout__right">
  <Subtotal/>
      </div>
  </div>
    )
}

export default Checkout
