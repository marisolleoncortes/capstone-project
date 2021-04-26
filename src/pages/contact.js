import React from "react"
import Default from "../layouts/default.js"
import SEO from "../components/seo.js"

export default function Contact() {
    return (
        <Default>

<SEO title="Contact Us"></SEO>
            <h1>Contact Us</h1>

        <form name="contact" method="POST" data-netlify="true" action="/thankyou">

            <input type="hidden" name="form-name" value="contact" />

        <div className="row">
            <div className="col-sm-4">
                <label for="fullname">Your Name</label>
                <input type="text" id="fullname" name="fullname" placeholder="Your Name" required className="form-control" />
            </div>
        </div>

        <div className="row">
            <div className="col-sm-4">
            <label for="fullname">Your Email</label>
                <input type="text" id="email" name="email" placeholder="Your Email" required className="form-control" />
            </div>
        </div>

        <div className="row">
            <div className="col-sm-4">
                <label for="email">Your Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required className="form-control" />
            </div>
        </div>

        <div className="row">
               <div className="col-sm-4">
                   <label for="message">Your Message</label>
                   <textarea name="message" id="message" className="form-control" placeholder="Your Message" required>
                       </textarea>
               </div>
           </div> 
            

            
            <button type="submit" className="btn btn-lg btn-primary">Contact Us</button>

            </form>

        </Default>
    )
}