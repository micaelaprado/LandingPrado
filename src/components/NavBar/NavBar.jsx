import CartWidget from "../CartWidget/CartWidget"
import React from "react"
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <h1>Glad Skin Care</h1>
            <div>
                <ul>
                    <li>
                        <a href="">Home</a>
                        <a href="">Productos</a>
                        <a href="">Nuestra historia</a>
                        <a href="">Contacto</a>
                    </li>
                </ul>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar