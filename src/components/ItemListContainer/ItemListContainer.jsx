import React from 'react'
import { useEffect, useState} from 'react'
import {useParams } from 'react-router-dom'
import { getFetch } from '../../utils/getFetch'
import ItemList from '../ItemList/ItemList'
// ---------- CSS
import "./ItemListContainer.css"

const ItemListContainer = (listaproductos) =>{
  const[productos, setProductos] = useState([])
  const[cargando, setCargando] = useState(true)
  const {categoriaId} = useParams()

  useEffect(()=> {
    if (categoriaId) {
        getFetch()
        .then(resp =>  setProductos(resp.filter(producto => producto.categoria === categoriaId)))    
        .catch(err => console.log(err))
        .finally(()=>setCargando(false))     
    }else{
        getFetch()
        .then(resp =>  setProductos(resp))    
        .catch(err => console.log(err))
        .finally(()=>setCargando(false)) 
    }  
}, [categoriaId])


  return(
    cargando ? <h2 className='cargando'>Cargando...</h2> : 
    
    <div className='ItemListContainer'> 
      <ItemList productos={productos} />
    </div>

  )
}

export default ItemListContainer