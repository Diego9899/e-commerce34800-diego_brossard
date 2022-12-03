import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import CartWidget from '../CartWidget/CartWidget'
import LogoWidget from '../LogoWidget/LogoWidget'
import "./NavBar.css"


function NavBar () {

  const {totalQuantity} = useCartContext()

  return (
    <header className='containerNavBar'>
      <LogoWidget/>
      <div className='navBarTitulo'>
        <Link to="/"><p>BLACK</p> <p>WHITE</p></Link>
      </div>
      <div className='containerNavBarList'>
        <ul className='navBarList'>
            <li><Link to="/ItemListContainer">Inicio</Link></li>
            <li><Link to="/categoria/gorras">Gorras</Link></li>
            <li><Link to="/categoria/remeras">Remeras</Link></li>
            <li><Link to="/categoria/zapatillas">Zapatillas</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
      <div id='navBarIcono'>
        <Link to="/Cart"><CartWidget/></Link>
        {totalQuantity()!== 0 && totalQuantity()}
      </div>
    </header>
  )
}
export default NavBar