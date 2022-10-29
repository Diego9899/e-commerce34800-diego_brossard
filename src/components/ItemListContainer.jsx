import React from 'react'
import "./ItemListContainer.css"

function ItemListContainer({saludo="¡Bienvenido a mi e-commerce!"}) {
  return (
    <div className='saludo'>
        <p>{saludo}</p>
    </div>
  )
}

export default ItemListContainer