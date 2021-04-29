import React, { useContext } from "react"
import { CartContext } from "../../shopping.js"

export default function AddToCart({item}) {
    const { addProduct } = useContext(CartContext)
    return (
        <>
            <button className="btn btn-lg btn-danger btn-block" onClick={ () => addProduct(item) }>Add to Cart</button>
        </>
    )
}