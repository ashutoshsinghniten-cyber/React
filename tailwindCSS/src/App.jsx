import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Code from './Code.jsx'
function App() {
  return (
   <>
   <h1 className='bg-green-400 h-1 bg-center p-8 '> ki haal hain</h1>
   <Code username="Ashutosh" Stored="Stored in box" />
   <Code username="Abhishek" Stored='Stored in office'/>
   </>
  )
}

export default App
