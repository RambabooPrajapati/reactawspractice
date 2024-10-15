import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

const Count = () => {
  return (
    <div style={{marginTop: "100px", marginLeft: "100px", marginBottom: "100px"}}>
      <ClickCounter/>
      <HoverCounter/>
    </div>
  )
}

export default Count
