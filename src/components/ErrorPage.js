
import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage=()=>{
   const errorpage=useRouteError();
    return(
        <div>
            <h1></h1>
            <h1>{errorpage.status}</h1>
            <h1>{errorpage.statusText}...</h1>
        </div>

    )
}
