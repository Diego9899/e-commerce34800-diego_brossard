import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

import CartContextProvider from "./context/cartContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      
      <CartContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer/>} />
        <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

/*
import * as React from 'react';
import { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [pokemons, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20';

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setLoading(false);
        setResult(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return loading ? (
    <h2>Cargando...</h2>
  ) : (
    <div>
      <h1>ItemListContainer</h1>
      {pokemons.map((obj) => (
        <div key={obj.id}>
          <div>{obj.name}</div>
          <div>
            <img src={obj.foto} />
          </div>
          <div>precio : {obj.price}</div>
        </div>
      ))}
    </div>
  );
}

*/
