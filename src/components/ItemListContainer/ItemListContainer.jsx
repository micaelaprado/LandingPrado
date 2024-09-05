import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ItemList from '../ItemList/ItemList.jsx';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollection = collection(db, 'products');
        let q;
        if (categoryId) {
          q = query(itemsCollection, where('category', '==', categoryId));
        } else {
          q = itemsCollection;
        }

        const itemsSnapshot = await getDocs(q);
        const itemList = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(itemList);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [categoryId]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h2>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;