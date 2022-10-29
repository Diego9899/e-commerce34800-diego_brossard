import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import LogoWidget from './components/LogoWidget/LogoWidget'

function App() {

  return (
    <div>
      <header>
        <LogoWidget/>
        <NavBar titulo= "E-commerce" list1="INICIO" list2="GORRAS" list3="REMERAS" list4="CAMISAS" list5="ZAPATILLAS"/>
      </header>
      <section id='ItemListContainer'>
        <ItemListContainer greeting="¡Bienvenido a mi e-commerce!"/>
      </section>
    </div>

  )
}

export default App
