import { useEffect, useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import styles from './App.module.css'
import CartWidget from './components/cartWidget'
import ItemListContainer from './components/itemListContainer'
import NavBar from './components/navbar' 
import ProductList from './components/ProductList'

function App() {

  const [products, setProducts]= useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(data=>setProducts(data))
  }, [])
  

  return (
    <div>
      <div className={styles.header}>
        <NavBar />
        <CartWidget />
      </div>
      <div>
        <ItemListContainer greeting="Bienvenido a nuestra tienda" />
      </div>
      <Routes>
          <Route path="/" element={<h3>Inicio</h3>}></Route>
          <Route path="/catalogo" element={<ProductList/>}></Route>
          <Route path=''></Route>
        </Routes>
    </div>
  )
}

export default App
