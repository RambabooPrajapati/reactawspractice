import Hoc from './Hoc'

const HoverCounter = ({count, increaseCountFunction, decreaseCountFunction}) => {
  return (
    <div>
      <h1>Count is: {count}</h1>
     <button onMouseOver={increaseCountFunction}>Add Count</button> 
     <button onMouseOver={decreaseCountFunction}>Subtract</button>
    </div>
  )
}

export default Hoc(HoverCounter);
