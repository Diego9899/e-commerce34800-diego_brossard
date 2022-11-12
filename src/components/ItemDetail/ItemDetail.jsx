const ItemDetail = ({producto}) => {
    return (
      <div className="cardContainer">
        <div className='cardHeader'>{producto.name}</div>
          <div className='cardBody'>
            <img src={producto.foto} />
          </div>
        <div className='cardFooter'>${producto.price}</div>
    </div> 
    )
  }
  
  export default ItemDetail
  