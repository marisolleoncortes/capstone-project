import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import AddToCart from "../components/add-to-cart.js"




 
export default function ProductItemPreview({product}) {
    return (

        <div className="row menu-item-preview">
           
            <div className="col-md-3">
                <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={product.image.file.url} alt={product.name} data-holder-rendered="true"/>
                <div className="card-body">
                <p className="product-price">${product.price}</p>
                <p className="card-text">{product.name}</p>
                
                <p><Link to={"/product/" + product.slug} className="call-to-action">More Info</Link></p>
                 
                
            <AddToCart className="cart-button" item={ {sku: product.slug, price: product.price, name: product.name} }></AddToCart>
               
                </div>
                </div>
                 </div>
                 
        </div>
    
        )
    }
        
        
       
 