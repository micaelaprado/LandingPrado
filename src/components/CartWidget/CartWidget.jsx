import cart from '.../assets/cart.svg'
import React from 'react'

const CartWidget = () => {
    return (
        <div> 
            <img src={cart} alt="cart"/>
            <span>3</span>
        </div>
    )
}

export default CartWidget