import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListContainer.css'

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = () => {
      const allItems = [];
      const filteredItems = categoryId 
        ? allItems.filter(item => item.category === categoryId) 
        : allItems;

      setTimeout(() => {
        setItems(filteredItems);
      }, 1000); 
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h2>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;