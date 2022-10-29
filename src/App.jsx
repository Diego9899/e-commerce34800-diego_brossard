import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from "./components/NavBar.jsx"
import ItemListContainer from './components/ItemListContainer'

function App() {
  

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <section id='ItemListContainer'>
        <ItemListContainer/>
      </section>
    </div>

  )
}

export default App
