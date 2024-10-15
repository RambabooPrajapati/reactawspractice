import React from 'react'
import Hoc from './Hoc'

const ClickCounter = ({count, increaseCountFunction, decreaseCountFunction }) => {
  return (
    <div>
      <h1> Count is: {count}</h1>
      <button onClick={increaseCountFunction}>Add</button>
      <button onClick={decreaseCountFunction}>Subtract</button>
    </div>
  )
}

export default Hoc(ClickCounter);
