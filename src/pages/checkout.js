import React from "react"
import Default from "../layouts/default.js"
import Helmet from "react-helmet"
import CheckoutForm from "../components/checkoutForm"
import Cart from "../components/cart"

export default function Checkout() {

    return (
        <Default>
            <Helmet>
                <title>Check Out</title>
            </Helmet>
            <h2>Check Out</h2>
            <Cart></Cart>
            <hr/>
            <CheckoutForm></CheckoutForm>
        </Default>
    )
}