import React from 'react'
import { useEffect } from 'react'
import { SWIGGY_API } from '../utils/constants'
import { useState } from 'react'
import ResCards from './ResCards'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

const Body = () => {
 const[listOfRestaurants,setListOfRestaurants]=useState([]);
 const[filteredListOfRestaurants,setFilteredListOfRestaurants]=useState([]);
 const[searchText,setSearchText]=useState("");
 const fetchData=async ()=>{
  const data=await fetch(SWIGGY_API);
  const json=await data.json();
  console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

const filteredList=()=>{
  const filteredList=listOfRestaurants.filter((restaurant)=>(
    restaurant.info.avgRating>=4.4
  ))
  console.log(filteredList);
  setFilteredListOfRestaurants(filteredList);
}

const textValue=({target})=>{
setSearchText(target.value);
};


useEffect(()=>{
  fetchData();
},[]);





if(filteredListOfRestaurants.length===0){
  return <Shimmer/>
}

  return (
    <div className='body'>
     <div className='searchcontainer buttoncontainer'>
      <input type="text" value={searchText} onChange={textValue} className='searchtext rounded-corners'></input>
      <button className='searchbutton' onClick={(e)=>{
       const filteredlist=listOfRestaurants.filter(res=>res.info.name.toUpperCase().includes(searchText.toUpperCase()));
       console.log(filteredlist);
        setFilteredListOfRestaurants(filteredlist);
      }}>Search
      </button>
      <button  className='filterbutton' onClick={filteredList}>Top Rated Restaurants</button>
     </div>
     <div className='rescontainer'>
      {filteredListOfRestaurants.map((restaurant)=>(
        <Link style={{ color: 'black', textDecoration: 'none' }} to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><ResCards data={restaurant}/>
        </Link>
      ))

      }
     </div>
    </div>
  )
}

export default Body
