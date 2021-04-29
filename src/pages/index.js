import * as React from "react"
import { Carousel } from 'react-bootstrap';
import FullWidth from "../layouts/fullwidth.js"
import "./index.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, Link } from "gatsby"
//import Helmet from "react-helmet"
import SEO from "../components/seo.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faMobile, faShoppingCart, faDoorOpen, faCarrot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'

library.add(faCheckSquare, faCoffee, faMobile, faShoppingCart, faDoorOpen, faCarrot)


export default function Index() {
  return (
    <FullWidth>

   <SEO>"Need fruits & vegetables? We deliver to your doorstep!"</SEO>

      <Carousel>
        <Carousel.Item>
          <div class="content">
            <img src="img/vegetables.jpg" className="img-fluid" alt="Vegetables" />
            </div>
         <Carousel.Caption>
         <div class="container delivery">
  <div class="row">
    <div class="col-lg-6">
           <h3>Fresh Produce Delivery</h3>
            <p><button className="btn btn-lg btn-primary"><Link to="/orderonline">Order Online</Link></button></p>
            </div>
            </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div class="content">
            <img src="img/organicvegetables.jpg" className="img-fluid" alt="Organic Vegetables" />
            </div>
         <Carousel.Caption>
         <div class="container delivery">
  <div class="row">
    <div class="col-lg-6">
         <h3>Fresh Produce Delivery</h3>
         <p><button className="btn btn-lg btn-primary"><Link to="/orderonline">Order Online</Link></button></p>
         </div>
            </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>

      <div class="container delivery">
  <div class="row">
    <div class="col-md-8">
    <p className="home-page">Delivered Fresh to Your Doorstep</p> 
      </div>
    <div class="col-2">
    <p><img src="img/delivery-truck.png" className="delivery" alt="Produce Delivery" /></p>
    
  </div>
    </div>
</div>

      <div class="container">
  <div class="row">
    <div class="col-md-4">
    <div className="card mb-3 box">
   <p className="mobile-phone"> <FontAwesomeIcon icon="mobile" /> </p>
      <h4 className="box-title">ORDER ON THE GO</h4>
      <p className="box-text">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
    </div>
    </div>
    <div class="col-md-4">
    <div className="card mb-3 box">
    <p className="door"> <FontAwesomeIcon icon="door-open" /> </p>
      <h4 className="box-title">DOORSTEP DELIVERY</h4>
      <p className="box-text">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
    </div>
    
    </div>
    <div class="col-md-4">
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

