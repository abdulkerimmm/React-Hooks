// this is logical useState it is very important !!!!!!!!!!!!!!!!
import React, { useEffect, useState } from 'react'
console.log("this part just will render when start project then won't will work again ")

const App = () => {
  const [name, setName] = useState('abdulkerim')
  const [num, setNum] = useState(1)
  let notStateName = "abdulkerim";

  useEffect(() =>{
    console.log('name: ', name)
    console.log('num: ', num)
  },[name,num])
  console.log('rendering......')

  return (
    <>
    {console.log("rerrrr")}
    <div style={{padding:"100px" }}>
        <button onClick={() =>{
          setName('Salah')
          notStateName = "Salah"
        }}>Change names</button>

        <button onClick={() =>{
          setNum(prev => prev+1)
        }}>Change num</button>

        <p>name:  {name}</p>
        <p>notStateName:  {notStateName} </p>
        <p>num:{num}</p>
    </div>
    </>

  )
}

export default App