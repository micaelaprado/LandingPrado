import React from 'react';
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <button>Añadir al carrito</button> {}
    </div>
  );
};

export default ItemDetail;