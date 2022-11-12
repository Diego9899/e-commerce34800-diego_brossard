import React from 'react'

function ItemCount ({ stock, initial,  onAdd }) {
    
    return (
    <div>
        <input type="number" id='ItemCount' max={stock} min="1" value={initial}/>
        <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount

