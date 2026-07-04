import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let [Counter, setCounter] = useState(0);
  const addOf = ()=>{
    if(Counter <20){
      Counter = Counter + 1;
      setCounter(Counter);
    }
  }
  const removeOf = ()=>{
    if(Counter>0){
      Counter = Counter-1;
      setCounter(Counter);
    }
  }
  return (
    <>
      <h1>Counter is : {Counter}</h1>
      <button onClick={addOf}>Add {Counter}</button> <br/>
      <button onClick={removeOf}>Remove {Counter}</button> 
   
    </>
  )
}

export default App
