import * as React from "react"
import { Carousel } from 'react-bootstrap';
import Default from "../layouts/default.js"
import "./index.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, Link } from "gatsby"


export default function Index() {
  return (
    <Default>

      <Carousel>
        <Carousel.Item>
          <img src="img/slide01.jpg" className="img-fluid" alt="First Image" />
         <Carousel.Caption>
            [Fix Image Size & Background]<h3>Fresh Produce Delivery</h3>
            <button className="btn btn-lg btn-primary"><Link to="/orderonline">Order Online</Link></button>[Fix button align left]
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="img/slide02.jpg" className="img-fluid" alt="First Image" />
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
    [Mobile Icon]
      <h4>ORDER ON THE GO</h4>
      <p className="box-text">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
    </div>
    </div>
    <div class="col-4">
    <div className="card mb-3 box">
    [Delivery Icon]
      <h4>DOORSTEP DELIVERY</h4>
      <p className="box-text">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
    </div>
    
    </div>
    <div class="col-4">
    <div className="card mb-3 box">
    [Delivery Icon]
      <h4>SAME DAY DELIVERY</h4>
      <p className="box-text">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
    </div>
    
    </div>
</div>
</div>
     
    </Default>
  
    
  )
}

