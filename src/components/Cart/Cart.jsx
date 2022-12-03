import { useCartContext } from "../../context/cartContext"

const Cart = () => {

    const {cartList, deleteCart, removeItemCart, totalPrice} = useCartContext()
    // Desafio de prueba, generar orden y conectarla con firebase
    const handleSubmit = () =>{
      let orden = {}
       orden.buyer = {name: "Diego", email: "d@gmail.com", phone: "123456"}
       orden.total = totalPrice()
      console.log(orden);
    }
    // -----------------------------------------------------
    return (
      <div>
        <h1>Carrito</h1>
        <ul>
          {cartList.map((product) => 
          <li key={product.id}> 
            Nombre: {product.name} - 
            Cantidad: {product.quantity} 
            <button onClick={ ()=> removeItemCart(product.id)}>X</button> 
          </li>)}
        </ul>
        <label htmlFor="">{totalPrice() !== 0 && totalPrice()}</label>
        <button onClick={deleteCart}>Borrar todo</button>
        
        <button onClick={handleSubmit}>Generar orden</button>
      </div>
    )
  }
  
  export default Cart
  