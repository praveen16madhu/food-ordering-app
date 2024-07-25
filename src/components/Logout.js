import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleState } from '../utils/cartSlice';
const Logout = () => {
    const dispatch=useDispatch();
  return (
    <div className='logout'>
     <h1>Please login</h1> 
     <button onClick={()=>dispatch(toggleState())}>login</button>
    </div>
  )
}

export default Logout
