/*import React, { useState } from 'react';

const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

const Checkboxes = ({ CheckData,data,setData }) => {
  

  

  const handleCheckboxChange = (val) => {
    console.log('the top level object clicked',val)
    var clickedData;

    setData((prevState) => {
     

       clickedData = { ...prevState, [val.id]: !data[val.id] }

      const topValue=!data[val.id];


      function checkChildren(val){

         val.map((val, index) => {

          clickedData[val.id] = topValue;

           val.children && checkChildren(val.children)
       })

      }

      val.children && checkChildren(val.children);
      console.log(clickedData);

      function checkParentIsClicked(val) {
      
        if (clickedData[val.id]) {
          return true;
        }
  
        if (!val.children) {
          return clickedData[val.id];
        }
  
        if(val.children){

        const value=val.children.every((val) => {
          return checkParentIsClicked(val)
        })
        
        clickedData[val.id]=value;
        return value;
      
      }
   
      }


  
      console.log(CheckboxesData);
  
      CheckboxesData.map(val=>checkParentIsClicked(val))

      console.log("after the check with the parent",clickedData)
    

     
      return clickedData;
      
     })


     
       

    
  };

  return (
    <div>
      {CheckData && CheckData.length > 0 &&
        CheckData.map((val, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <div>
              <input
                type="checkbox"
                name={val.label}
                checked={data[val.id] || false}
                value={val.label}
                onChange={() => handleCheckboxChange(val)}
              />
              {val.label}
            </div>

            {val.children && (
              <Checkboxes CheckData={val.children} setData={setData} data={data} />
            )}
          </div>
        ))}
    </div>
  );
};

export default function NestedCheckbox() {
  const [data,setData]=useState({})
  return (
    <div>
      <h2>Nested Checkbox</h2>
      <Checkboxes CheckData={CheckboxesData} setData={setData} data={data} />
    </div>
  );
}

*/

import React from "react";
import { useState } from 'react'
import {useEffect} from 'react'

function TodoList() {

  const [data, setData] = useState("")
  const [items, setItems] = useState([])

  
  const changeHandler = (e) => {

    const currentValue = e.target.value;
    setData(currentValue);
    
  }

  useEffect(() => {
    setData("")
  },[items])

  const clickHandler = (e) => {

    setItems((prevState) => {

      const addedData = [...prevState, {value:data,isChecked:false}]
    return addedData
    })

    
  }
  const deleteHandler=(e,index)=>{

    const updatedState = [...items.slice(0, index), ...items.slice(index + 1)]

    setItems(updatedState);

  }
 
    return (
        <div>

        <div className="userForm" >

          <input  style={ {width:'300px',height:'20px' ,margin:'10px'}}type='text' value={data} onChange={(e) => changeHandler(e)} />
          <button style={{width:'100px',height:'20px'}}onClick={clickHandler}>add</button>
        
        </div>


        {items.length>0 && items.map((val, index) => {
          return (
            

            <div >
              <input type='checkbox' checked={val.isChecked} onChange={(e) => {
                currentState = !val.isChecked;
                const updatedItems = items.map((val,i) => {
                  return i===index?{...val,isChecked:currentState}:val
                })

                setItems(updatedItems);
              }
            }

               />

            {val.value}

            <button onClick={(e)=>deleteHandler(e,index)}>delete</button>

            </div>
          )
        })

        }

          
          
        </div>
    );
}

export default TodoList;





