import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
    return(
        <h1>This Is MyApp fxn call</h1>
    )
}
const name = 'Nitin Singh'
const reactElement = React.createElement(
    'a',
    {href :'https://www.google.com/', target:'_blank'},
    'clicked here for open new page',
    name,
)



createRoot(document.getElementById('root'))
.render(
    
    reactElement,
    
    
    
)
