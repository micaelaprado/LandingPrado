import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext'; 
import ItemCount from '../ItemCount/ItemCount'; 
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext); 
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(item, quantity); 
  };

  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      
      <ItemCount stock={item.stock} initial={1} onAdd={setQuantity} />

      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default ItemDetail;