import React from "react"
import Default from "../layouts/default.js"
import { Link } from "gatsby"
import AddToCart from "../components/add-to-cart.js"
import SEO from "../components/seo.js"

export default function ProductPage( {pageContext}) {

    const { product } = pageContext;
    
    return (
        <Default>

            <SEO title={product.name} description={'Order our ${product.name} at Stay Fresh!'}></SEO>
            <div className="row">
                <div className="col-sm-6">
                <h3>{product.name}</h3>
                <p>
                    <Link to="/">Return to Home</Link>
                </p>
                <p>{product.description.description}</p>

                <p>${product.price}</p>

                <AddToCart item={ {sku: product.slug, price: product.price, name: product.name} }></AddToCart>
                </div>
            <div className="col-sm-6">
            <img src={product.image.file.url} />
            </div>
            </div>
            
        </Default>
    )
}

