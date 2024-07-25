import React from 'react'
import ResListItems from './ResListItems';
const ResItems = ({items,optionButton,setShowIndex}) => {
    console.log(items,optionButton,setShowIndex);
  return (
    <div  className='listcontainer'>
      <div  className='res-list-items' onClick={()=>{ 
        if(optionButton)
        return setShowIndex(null);
       else setShowIndex(true);
       }}>
        <div className='padding' >
        <span>{items.title}</span>
        <span>({items.itemCards.length})</span>
        </div>
        <span >⬇️</span>
      </div>
      {optionButton&&<ResListItems items={items.itemCards}/>}
    
    </div>

    
    
  )
}

export default ResItems
