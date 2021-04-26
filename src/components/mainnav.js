import React, { useContext } from "react"
import { Link } from "gatsby"
import { CartContext } from "../../shopping.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MainNav() {

    const { itemCount } = useContext(CartContext)

    return (
        <ul className="main-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/orderonline">Order Online</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
            <li>
                <FontAwesomeIcon icon="shopping-cart" className="cart"></FontAwesomeIcon> <span className="badge badge-light">{itemCount}</span>
            </li>
        </ul>
    )
}