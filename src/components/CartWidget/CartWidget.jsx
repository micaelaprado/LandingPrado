import cart from '.../assets/cart.svg'
import React from 'react'
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div> 
            <img src={cart} alt="cart icon"/>
            <span>3</span>
        </div>
    )
}

export default CartWidget