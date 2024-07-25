import React from 'react'
import { useSelector } from 'react-redux'
import ResListItems from './ResListItems';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
const Cart = () => {
  const items_info=useSelector((store)=>store.cart.items);
  const dispatch=useDispatch();
  return (
    <div className='cart'>
      <button  className='cart' onClick={()=>(
        dispatch(clearCart()))
      }><h3>Clear cart</h3> </button>
      {items_info.length==0 ? <h1>The Cart Is Empty Add Something</h1>
      :<ResListItems items={items_info}/>}
    </div>
  )
}

export default Cart
