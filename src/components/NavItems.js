import { useEffect } from "react";
import { useState } from "react";
import useStatus from "../utils/setStatus";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { toggleState } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
export const NavItems=()=>{
   
    const[btn,setBtn]=useState("Login");
    
    const[count,setcount]=useState(0);
    const status=useStatus();

    const items_info=useSelector((store)=>store.cart.items);
     const status_info=useSelector((store)=>store.cart.userStatus);

    const dispatch=useDispatch();
  
    return(
    
      <div className="nav-container">
        {console.log("navitems")}
          <ul>
         <Link style={{ color: 'black', textDecoration: 'none'}}  to="/home"><li className="nav-items">Home</li></Link> 
          <Link style={{ color: 'black', textDecoration: 'none' }}  to="/about"><li className="nav-items">AboutUs</li></Link>
           <Link style={{ color: 'black', textDecoration: 'none' }}  to="/contact"><li className="nav-items">ContactUs</li></Link>
          <Link style={{ color: 'black', textDecoration: 'none' }}  to="/cart"><li className="nav-items" >Cart ({items_info.length} -Items)</li></Link>
           <button className="button" onClick={()=>{
            //btn=="Login"?setBtn("Logout"):setBtn("Login")
              dispatch(toggleState())
           }}>logout</button>
           <li>{status=="online"?"online":"offline"}</li>
          </ul>
      </div>
    )

}

