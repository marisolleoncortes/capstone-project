import React from "react"
import Default from "../layouts/default.js"
import { graphql } from "gatsby"
import ProductItemPreview from "../components/productItemPreview.js"

const OrderOnline = ({data}) => {
    return (
        <Default>
          
            {data.allContentfulProduct.nodes.map(product => (
      <ProductItemPreview product={product}></ProductItemPreview>
    ))}

    </Default>
    )
    
}

export default OrderOnline

export const query = graphql`

query MyQuery {
    allContentfulProduct {
      nodes {
        slug
        name
        description {
          description
        }
        image {
          file {
            url
          }
        }
        price
      }
    }
  }
  `