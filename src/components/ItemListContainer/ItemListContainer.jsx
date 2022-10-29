import React from 'react'
import { useEffect, useState } from 'react'
import "./ItemListContainer.css"

function ItemListContainer({greeting}) {
  return (
    <div className='saludo'>
        <p>{greeting}</p>
    </div>
  )
}

export default ItemListContainer