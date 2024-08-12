import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListCointainer from './components/ItemListContainer/ItemListContainer'
import AppRouter from './AppRouter';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListCointainer saludos={"Te damos la bienvenida"}/>
    </div>
  )
}
function App() {
  return <AppRouter />;
}

export default App
