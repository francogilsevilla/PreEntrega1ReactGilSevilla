import { useEffect, useState } from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import styles from './App.module.css'
import NavBar from './components/navBar'
import ProductItem from './components/ProductItem'
import ProductList from './components/ProductList'

function App() {

  const [products, setProducts]= useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data) =>setProducts(data));
  }, []);
  

  return (
    <div>
      <NavBar/>
        {/* <CartWidget /> */}
        {/* <ItemListContainer greeting="Bienvenido a nuestra tienda" /> */}
      <Routes>
          <Route path={NavBar.h1} element={<Navigate to='home'/>}/>
          <Route path='/' element={<Navigate to='home'/>} />
          <Route path='/Inicio' element={<h3 className={styles.greeting}>Bienvenidos a nuestra tienda!</h3>}/>
          <Route path='/productos' element={<ProductList products={products}/>}/>
          <Route path='/productos/:id' element={<ProductItem products={products}/>}/>
          <Route path='/cart' element={<h3 className={styles.cart}>Carrito de compras</h3>}/>
          <Route path='*' element={<h4>404 Not Found</h4>}/>
        </Routes>
    </div>
  )
}

export default App
