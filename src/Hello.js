import React, { memo} from 'react'

const Hello = ({ decrease}) => {
    // console.log("hello");
    
  return (
    <div>
        <h3>DecreaseNumber: {decrease}</h3>
    </div>
  )
}

export default memo((Hello))
