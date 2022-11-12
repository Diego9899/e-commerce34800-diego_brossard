import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className="cardContainer">
          <Link to={`/detail/${producto.id}`} >
            <div className='cardHeader'>{producto.name}</div>
              <div className='cardBody'>
                <img src={producto.foto} />
              </div>
            <div className='cardFooter'>${producto.price}</div>
          </Link>
        </div> 
  )
}

export default Item