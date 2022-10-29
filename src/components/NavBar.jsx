import React from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css"


let titulo = "E-commerce"
let list1 = "INICIO"
let list2 = "PRODUCTOS"
let list3 = "CONTACTO"

function NavBar () {
  return (
    <div className='containerNavBar'>
      <div className='navBarTitulo'>
        <a href="#inicio"><h2>{titulo}</h2></a>
      </div>
      <div className='containerNavBarList'>
        <ul className='navBarList'>
            <li><a href="#inicio">{list1}</a></li>
            <li><a href="#productos">{list2}</a></li>
            <li><a href="#contacto">{list3}</a></li>
        </ul>
      </div>
      <div id='navBarIcono'>
        <CartWidget/>
      </div>
    </div>
  )
}

export default NavBar