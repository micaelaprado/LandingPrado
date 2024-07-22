import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListCointainer from './components/ItemListContainer/ItemListContainer'

function App() {
  

  return (
    <div>
      <NavBar />
      <ItemListCointainer saludos={"Te damos la bienvenida"}/>
    </div>
  )
}

export default App
