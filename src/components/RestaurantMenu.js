import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { RES_MENU } from '../utils/constants'
import Shimmer from './Shimmer'
import ResItems from './ResItems'

const RestaurantMenu = () => {
const{resid}=useParams();
const[resMenu,setResMenu]=useState([]);
const[item,setItem]=useState(null);


useEffect(()=>{
fetchData();
},[])


const fetchData=async ()=>{
  const data=await fetch(RES_MENU+resid);
  const json=await data.json();
  console.log(json);
  setResMenu(json?.data);
}
  if(resMenu.length===0)
  return <Shimmer/>

  const{avgRatingString,costForTwoMessage,cuisines}=resMenu?.cards[2]?.card?.card?.info;

   const list=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
   
   
   console.log(list);

   const filteredList=list.filter(card=>card.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   console.log(filteredList);
  return (
    <div className='res-menu'>
      <div className='res-info'>
        <h2>{cuisines.join(', ')} -{costForTwoMessage}</h2>
      </div>
     <div className='itemcontainer'>
      {filteredList.map((list,index)=> (<ResItems key={list.card.card.title} 
      setShowIndex={(value)=>{
        if(value===null)
        return setItem(null)
       else
        return setItem(index);
      }}
       optionButton={item===index ?true:false}  items={list.card.card}/>) )}
      
     </div>

    </div>
  )
}

export default RestaurantMenu
