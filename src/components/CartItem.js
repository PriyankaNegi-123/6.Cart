import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { useGlobalContext } from '../context/context'
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'

const CartItem = ({id, img, item, title, price, amount}) => {
  const {remove, increase, decrease} = useGlobalContext();
  return (
    <article className='cart-item'>
      <div className='cart-left'>
        <div className='img-cont'>
        <img src={img} alt={title}/>
        </div>
        <div className='cart-left-right'>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn' 
        onClick={()=> remove(id)}>remove</button>
      </div>
      </div>
      {/* buttons  */}
      <div className='cart-right'> 
      <button className='amount-btn' 
        onClick={()=> increase(id)}><IoIosArrowUp/></button>
        <p>{amount}</p>
        <button className='amount-btn' 
        onClick={()=> decrease(id)}><IoIosArrowDown/></button>
      </div>
    </article>
  )
}

export default CartItem;