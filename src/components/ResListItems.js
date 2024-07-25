import React from 'react'
import { RES_IMG } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

 export const ResListItems = ({items}) => {
    console.log(items);
    const dispatch=useDispatch();

      
  return (
    <div>
      {
        items.map((item)=>(
            <div key={item.card.info.id}>
                <div className='res-items'>

                  <div className="left-align">
                   <span>{item.card.info.name}</span>-
                   <span> Rs{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                   <p>{item.card.info.description}</p>
                  </div>

                   <div className="right-align">
                    <div className='absolute'>
                    <img src={ RES_IMG+item.card.info.imageId} alt="text image" width="100px" height="100px"/>
                    
                    </div>
                    <button onClick={()=>dispatch(addItem(item))}>Add Button</button>

                  </div>

                </div>
              </div>
        )) 

      }

      
    
    </div>
  )
}

export default ResListItems
