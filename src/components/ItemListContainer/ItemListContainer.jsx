import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Loader from '../Loader/Loader';  

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, 'products');

        getDocs(productsCollection).then((querySnapshot) => {
            const items = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProducts(items);
            setLoading(false); 
        });
    }, []);

    if (loading) {
        return <Loader />; 
    }

    return (
        <div>
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ItemListContainer;