import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"


function NavBar ({titulo, list1, list2, list3, list4, list5}) {
  return (
    <div className='containerNavBar'>
      <div className='navBarTitulo'>
        <a href="#inicio"><h2>{titulo}</h2></a>
      </div>
      <div className='containerNavBarList'>
        <ul className='navBarList'>
            <li><a href="#list1">{list1}</a></li>
            <li><a href="#list2">{list2}</a></li>
            <li><a href="#list3">{list3}</a></li>
            <li><a href="#list4">{list4}</a></li>
            <li><a href="#list5">{list5}</a></li>
        </ul>
      </div>
      <div id='navBarIcono'>
        <CartWidget/>
      </div>
    </div>
  )
}
export default NavBar