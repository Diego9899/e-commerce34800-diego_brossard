import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

function ItemCount ({ initial =1, stock =1,  onAdd }) {
    
    const [cantidad, setCantidad] = useState(initial)
  
    const sumar = ()=>{
      if(cantidad < stock){
        setCantidad (cantidad+1)
      }
    }
    const restar = ()=>{
      if(cantidad > 1){
        setCantidad (cantidad-1)
      }
    }
    const addCantidad = ()=>{
        onAdd(cantidad)
    }

    return (
    <div className='itemCount'>
        <button onClick={restar}>-</button>
        <label>{cantidad}</label>
        <button onClick={sumar}>+</button>
        <button onClick={addCantidad}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount

