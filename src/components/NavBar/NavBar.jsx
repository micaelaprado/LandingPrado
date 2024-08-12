import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <h1>Glad Skin Care</h1>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/productos">Productos</Link>
                        <Link to="/nuestra-historia">Nuestra historia</Link>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;