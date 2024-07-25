import { useEffect } from "react"
import {LOGO_URL} from "../utils/constants"


export const LogoContainer=()=>{

  useEffect(()=>{
    console.log("iam from the logo container after first render");
  })


    return(
     <div className="logo-container">
        {console.log("logocontainer")}
         <img className="logo" src={LOGO_URL} alt="my food app"/>
     </div>
    ) 
 }
