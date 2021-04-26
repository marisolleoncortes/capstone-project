import React from "react"
import Default from "../layouts/default.js"
import SEO from "../components/seo.js"
import { Link } from "gatsby"

export default function Thankyou() {
    return (
        <Default>

<SEO title="Contact Us"></SEO>
            <h1>Thank You</h1>

       <p>We appreciate your input and will reply in 1-2 business days!</p>

<Link to="/" className="btn btn-lg btn-primary">Return to Homepage</Link>

        </Default>
    )
}