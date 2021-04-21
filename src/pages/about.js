import React from "react"
import Default from "../layouts/default.js"

export default function About() {
    return (
        <Default>
           [change image & fix size] <div class="container">
  <div class="row">
    <div class="col-12">
    <img src="img/slide02.jpg" className="img-about" alt="First Image" />
    </div>
    </div>
    </div>

            <div class="container">
  <div class="row">
    <div class="col-6">
            <h1>Our Story</h1>

            <p>Welcome to Stay Fresh! We deliver fruits & vegetables to your doorstep from local farms or makets of your choosing.
                We bring the season's best mix of 100% certified-oranic produce and hand-crafted farm products conveniently to you door by growin and partnering with local farms. Each delivery comes with delicious recipies and quick tips.
            </p>
            </div>

           <div class="col-6 about-us">
               [cover page & add icon] 

            </div>
            </div>
            </div>
        </Default>
    )
}

