import React from 'react';
import CartItem from './CartItem'
import {useGlobalContext} from '../context/context'

const CartContainer = () => {
  const {cart, clearCart, total} = useGlobalContext();
  if(cart.length ===0){
    return <section className='cart'>
      <header>
        <h2>Your Cart</h2>
        <h4 className='empty-cart'>is currently empty</h4>
      </header>
    </section>
  } 
  return(
    <section className='cart'>
      <header>
        <h2>YOUR CART</h2>
      </header>
        <div>
          {cart.map((item)=>{
            return (<CartItem key={item.id} {...item}/>
            );
          })}
        </div>
        <footer>
          <hr/>
          <div className='cart-total'>
            <h4>Total</h4>
            <h4>${total}</h4>
          </div>
          <button type='button' className='btn clear-btn' onClick ={clearCart}>CLEAR CART</button>
        </footer>
    </section>
  )
}

export default CartContainer