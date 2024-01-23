import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const myCustomInput=useRef()
  useEffect(()=>{
   if(myCustomInput.current){
    myCustomInput.current.addEventListener("focus",()=>{
     console.log("sss");
    })
   }
  },[myCustomInput])

  return (
    <div>
     <input className='abc df sds'  ref={myCustomInput} />
     
  {/* <button onClick={()=>{
    myCustomInput.current.addEventListener("focus",()=>{
      alert("ddddd")
    })
    console.log(myCustomInput.current.value)} }>dfdfdfd</button> */}

    </div>
  );
}

export default App;


