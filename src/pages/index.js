import * as React from "react"
import { Carousel } from 'react-bootstrap';
import FullWidth from "../layouts/fullwidth.js"
import "./index.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, Link } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faMobile, faShoppingCart, faDoorOpen, faCarrot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCheckSquare, faCoffee, faMobile, faShoppingCart, faDoorOpen, faCarrot)


export default function Index() {
  return (
    <FullWidth>

      <Carousel>
        <Carousel.Item>
          <img src="img/vegetables.jpg" className="img-fluid" alt="First Image" />
         <Carousel.Caption>
            [Fix Image Size & Background]<h3>Fresh Produce Delivery</h3>
            <button className="btn btn-lg btn-primary"><Link to="/orderonline">Order Online</Link></button>[Fix button align left]
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="img/fruitsvegetables.jpg" className="img-fluid" alt="First Image" />
         <Carousel.Caption>
         [Fix Image Size & Background<h3>Fresh Produce Delivery</h3>
            <button className="btn btn-lg btn-primary"><Link to="/orderonline">Order Online</Link></button>[Fix button align left]
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>

      <div class="container">
  <div class="row">
    <div class="col-12">
    <p className="home-page">Delivered Fresh to Your Doorstep</p>
    </div>
  </div>
</div>

      <div class="container">
  <div class="row">
    <div class="col-4">
    <div className="card mb-3 box">
   <p className="mobile-phone"> <FontAwesomeIcon icon="mobile" /> </p>
      <h4 className="box-title">ORDER ON THE GO</h4>
      <p className="box-text">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
    </div>
    </div>
    <div class="col-4">
    <div className="card mb-3 box">
    <p className="door"> <FontAwesomeIcon icon="door-open" /> </p>
      <h4 className="box-title">DOORSTEP DELIVERY</h4>
      <p className="box-text">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
    </div>
    
    </div>
    <div class="col-4">
    <div className="card mb-3 box">
    <p className="carrot"> <FontAwesomeIcon icon="carrot" /> </p>
      <h4 className="box-title">SAME DAY DELIVERY</h4>
      <p className="box-text">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
    </div>
    
    </div>
</div>
</div>
     
    </FullWidth>
  
    
  )
}

