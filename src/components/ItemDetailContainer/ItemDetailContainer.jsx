import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import { getFetch } from "../../utils/getFetch.js"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    useEffect(()=>{
      getFetch(productId)
        .then(resp => setProduct(resp))
        .catch(err => console.log(err))
        .finally(setLoading(false))
    }, [])

  return (
    <div>{loading ? <h2>Cargando...</h2> :<ItemDetail product={product} />}</div>
  )
}

export default ItemDetailContainer
