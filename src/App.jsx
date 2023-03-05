import styles from './App.module.css'
import CartWidget from './assets/components/cartWidget'
import ItemListContainer from './assets/components/itemListContainer'
import NavBar from './assets/components/navbar'

function App() {
  return (
    <div>
      <div className={styles.header}>
        <NavBar />
        <CartWidget />
      </div>
      <div>
        <ItemListContainer greeting="Bienvenido a nuestra tienda" />
      </div>
    </div>
  )
}

export default App
