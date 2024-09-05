import React, { useContext } from 'react';
import './Cart.css';

const Cart = () => {
    const { cart } = useContext(CartContext);

    if (cart.length === 0) {
        return <p>Tu carrito está vacío</p>;
    }

    return (
        <div>
            {cart.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
            <p>Total: ${calculateTotal(cart)}</p>
        </div>
    );
};