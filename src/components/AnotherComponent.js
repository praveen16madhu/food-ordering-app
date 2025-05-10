import React, { useState } from 'react'

const AnotherComponent = ({data}) => {

     const [info,setInfo]=useState(data);
  return (
    <div>
      {data.name}
    </div>
  )
}

export default AnotherComponent
