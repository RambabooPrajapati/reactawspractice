// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import Root from './Root.js';
// import About from './pages/About.js';
// import Contact from './pages/Contact.js';
// import Home from './pages/Home.js';
// import Login from './pages/Login.js';
// import Signup from './pages/Signup.js';
// import GetUserProfile from './pages/GetUserProfile.js';

// import { useCallback, useMemo, useState } from "react";
// import Hello from "./Hello";
// import Count from './Hoc/Count.js';
// import PromiseData from './Promises/PromiseData.js';
// import ClickCounter from "./Hoc/ClickCounter";
import Count from "./Hoc/Count";
// import HoverCounter from "./Hoc/HoverCounter";

// const router = createBrowserRouter(
// createRoutesFromElements(
//   <Route path="/" element={<Root />}>
//     <Route path="/" element={<Home />} />
//     <Route path= "hoc" element= {<Count/>}/>    
//     <Route path= "promise" element= {<PromiseData/>}/>    
//     <Route path="contact" element={<Contact />} />
//     <Route path="about" element={<About />} />
//     <Route path="login" element={<Login />} />
//     <Route path='profile' element={<GetUserProfile />} />
//     <Route path="signup" element={<Signup />} />

//   </Route>
// )
// );

// function App() {
//   // const [count, setCount] = useState(0);
//   // const [decrease, setDecreage] = useState(0);

//   // const random = useCallback(() => {
//   //   setDecreage(decrease - 1)
//   // },[decrease])
  
//   // const handleClick = () => {
//   //   setCount(count + 1)
//   // }
//   // const memoize = (count)=>{
//   //   // console.log("memoized value");
//   //   let add = 10
//   //   let total = 0
//   //   if(count){
//   //      total = add + count
//   //   }
//   //   return total
//   // }

//   // const memoizedValue = useMemo(()=>memoize(count), [count])

//   return (
//     // <>
//     //   App componnet
//     //   <p>memoizedValue : {memoizedValue}</p>
//     //   <p>Count : {count}</p>
//     //   <Hello  decrease={decrease}/>
//     //   <button onClick={handleClick}>+</button>
//     //   <button onClick={random}>-</button>
//     //   <Hoc/>
//     // </>
//     <RouterProvider router={router} />
//   );
// }

// HOC
const App = ()=>{
  return(
    <div style={{marginTop: "50px", marginLeft: "130px"}}>
      {/* <ClickCounter/>
      <HoverCounter/> */}
      <Count/>
    </div>
  )
}
export default App;
