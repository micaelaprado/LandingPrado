import React, { useContext } from 'react';
import cartIcon from '../../assets/cart.svg';
import { CartContext } from '../context/CartContext';
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div> 
      <img src={cartIcon} alt="cart" />
      {totalItems > 0 && <span>{totalItems}</span>}
    </div>
  );
}

export default CartWidget;