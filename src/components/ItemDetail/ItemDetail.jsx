import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {

    const onAdd = (cantidad) =>{
      console.log(cantidad)
    }

    return (
      <div className="cardContainer">
        <div className='cardHeader'>{producto.name}</div>
          <div className='cardBody'>
            <img src={producto.foto} />
          </div>
        <div className='cardFooter'>${producto.price}</div>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div> 
    )
  }
  
  export default ItemDetail
  