import { useState } from 'react'
import './App.module.css'
import Header from './assets/components/header'
import NavBar from './assets/components/navbar'

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <h1>Bienvenidos a nuestra Tienda</h1>
    </div>
  )
}

export default App
