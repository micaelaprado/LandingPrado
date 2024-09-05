import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext'; 
import ItemCount from '../ItemCount/ItemCount'; 
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext); 
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(item, quantity); 
    setAddedToCart(true); 
  };

  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>

      {item.stock > 0 ? (
        <>
          {!addedToCart ? (
            <ItemCount 
              stock={item.stock} 
              initial={1} 
              onAdd={setQuantity} 
            />
          ) : (
            <p>¡Producto añadido al carrito!</p> 
          )}
          <button onClick={handleAddToCart}>Añadir al carrito</button>
        </>
      ) : (
        <p>Producto sin stock</p> 
      )}
    </div>
  );
};

export default ItemDetail;