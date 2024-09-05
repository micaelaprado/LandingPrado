import React from 'react';
import "./ItemList.css"
import Item from '../Item/Item.jsx';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;