import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css";
import { CartContext } from '../../CartContext';

import cremaHumectanteImg from '../../assets/crema-humectante.jpg';
import locionFacialImg from '../../assets/locion-facial.jpg';
import balsamoLabialImg from '../../assets/balsamo-labial.jpg';
import contornoOjosImg from '../../assets/contorno-ojos.jpg';
import mascarillaImg from '../../assets/mascarilla.jpg';
import serumImg from '../../assets/serum.jpg';

const ItemDetailContainer = () => {
  const { itemId } = useParams(); 
  const [item, setItem] = useState(null); 

  useEffect(() => {
    const fetchItem = () => {
      const allItems = [
        { id: 1, name: 'Crema Humectante', description: 'Crema humectante para una piel radiante', image: cremaHumectanteImg },
        { id: 2, name: 'Loción Facial', description: 'Refresca tu piel en segundos', image: locionFacialImg },
        { id: 3, name: 'Bálsamo Labial', description: 'Dile adiós a tus labios agrietados', image: balsamoLabialImg },
        { id: 4, name: 'Contorno de Ojos', description: 'Revitaliza la piel e ilumina tu mirada', image: contornoOjosImg },
        { id: 5, name: 'Mascarilla', description: 'Ideal para una limpieza profunda de tu piel', image: mascarillaImg },
        { id: 6, name: 'Serum', description: 'Booster aliado de tu rutina de piel', image: serumImg },
      ];

      const selectedItem = allItems.find(item => item.id === parseInt(itemId)); 

      setTimeout(() => {
        setItem(selectedItem); 
      }, 1000); 
    };

    fetchItem(); 
  }, [itemId]); 

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando...</p>} 
    </div>
  );
};

export default ItemDetailContainer;