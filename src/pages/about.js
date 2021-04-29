import React from "react"
import Default from "../layouts/default.js"
import FullWidth from "../layouts/fullwidth.js"
import SEO from "../components/seo.js"

export default function About() {
    return (
        <FullWidth>

            <SEO title="About Stay Fresh"></SEO>
 
    <div><img src="img/vegetables-about.jpg" className="img-about" alt="Fresh Vegetables" /></div>

           
  <div class="row">
    <div class="col-sm-12 col-md-6">
            <h1 className="about">Our Story</h1>

            <p className="about">Welcome to Stay Fresh! We deliver fruits & vegetables to your doorstep from local farms or makets of your choosing.
                We bring the season's best mix of 100% certified-oranic produce and hand-crafted farm products conveniently to you door by growin and partnering with local farms. Each delivery comes with delicious recipies and quick tips.
            </p>
            </div>

           <div class="col-sm-12 col-md-6 about-us">
           <img src="img/produce-logo.png" className="logo-produce" alt="Produce" />
               

            </div>
           
            </div>
        </FullWidth>
    )
}

