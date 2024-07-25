import { LogoContainer } from "./LogoContainer"
import {NavItems} from "./NavItems"
import { useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
import { SWIGY_UPDATE } from "../utils/constants";




export const Header=()=>{
    
    const fetchData=async ()=>{
      
      try{
        const data=await fetch(SWIGGY_API);
        const json=await data.json();
        console.log(json);
      }

       catch(error){
        console.error(error.message);
       }

     };

    useEffect(()=>{
        fetchData();
        console.log("iam the header component after first render");
    },[]); 
     
  

    return(
        <div className="header">
            
            <LogoContainer/> 
          
            <NavItems/>
        </div>
    )
}
