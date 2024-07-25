import React from 'react'
import { RES_IMG } from '../utils/constants'
const ResCards = ({data}) => {
  return (
    <div className='rescards'>
        <div className='imgcon'>
        <img src={RES_IMG+data.info.cloudinaryImageId} alt="this ia res img" width="100%" height="100%" />
        </div>
        <h3>{data.info.name}</h3>
        <h4>{data.info.avgRating} stars</h4>
        <h4>{data.info.sla.deliveryTime} minutes</h4>
        <h4>{data.info.costForTwo}</h4>
        <h4>{data.info.cuisines.join(', ')}</h4>
       </div>
  )
}

export default ResCards;
