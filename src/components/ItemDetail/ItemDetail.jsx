import { useState } from "react";
import { Link } from "react-router-dom";
import {useCartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";

// CSS
import "./ItemDetail.css"; 

const ItemDetail = ({ product }) => {
  const[isCounter, setIsCounter] = useState(true)
  const {cartList, addToCart} = useCartContext()
  
  const onAdd = (quantity) => {
    addToCart({...product, quantity})
    setIsCounter(false)
  };

  return (
    <>
    <div className="detailContainer">
      <div className="detailBody">
        <img src={product.urlimg} />
        <div className="detailFooter">{product.name} - ${product.price}</div>
        {isCounter ? <ItemCount stock={10} initial={1} onAdd={onAdd} /> : 
        <div>
          <Link to="/Cart">Terminar compra</Link>
          <Link to="/">Seguir comprando</Link>
        </div> }
        
      </div>
    </div>
    </>
  );
};

export default ItemDetail;
