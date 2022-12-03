import React from 'react'
import { useEffect, useState} from 'react'
import {useParams } from 'react-router-dom'
import { getFetch } from '../../utils/getFetch'
import ItemList from '../ItemList/ItemList'
// ---------- CSS
import "./ItemListContainer.css"

const ItemListContainer = (productlist) =>{
  const[product, setProduct] = useState([])
  const[loading, setLoading] = useState(true)
  const {categoryId} = useParams()

  useEffect(()=> {
    if (categoryId) {
        getFetch()
        .then(resp =>  setProduct(resp.filter(product => product.category === categoryId)))    
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))     
    }else{
        getFetch()
        .then(resp =>  setProduct(resp))    
        .catch(err => console.log(err))
        .finally(()=>setLoading(false)) 
    }  
}, [categoryId])

  return(
    <div className='ItemListContainer'> 
       {loading ? <h2 className='cargando'>Cargando...</h2> : <ItemList product={product} /> }
    </div>

  )
}

export default ItemListContainer