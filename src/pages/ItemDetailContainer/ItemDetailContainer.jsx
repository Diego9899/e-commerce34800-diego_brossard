import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail.jsx"
import { getFetch } from "../../utils/getFetch.js"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {productoId} = useParams()

    useEffect(()=>{
      getFetch(productoId)
      .then(resp => setProducto(resp))
      
    }, [])
    console.log(producto)

  return (
    <div>
        <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer
