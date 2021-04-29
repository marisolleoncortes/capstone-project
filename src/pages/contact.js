import React from "react"
import Default from "../layouts/default.js"
import SEO from "../components/seo.js"

export default function Contact() {
    return (
        <Default>

<SEO title="Contact Us"></SEO>

    <div class="col-sm-12 col-md-6 offset-md-3">
            <h1 className="contact">Get In Touch</h1>
    </div>

        <form name="contact" method="POST" data-netlify="true" action="/thankyou">

            <input type="hidden" name="form-name" value="contact" />

            
        <div className="row-contact">
        <div class="col-sm-12 col-md-6 offset-md-3">
                <label for="firstname">First Name</label>
                <input type="text" id="firstname" name="firstlname" placeholder="First Name" required className="form-control" />
            </div>
        </div>

        <div className="row-contact">
        <div class="col-sm-12 col-md-6 offset-md-3">
                <label for="lastname">Last Name</label>
                <input type="text" id="lastname" name="lastname" placeholder="Last Name" required className="form-control" />
            </div>
        </div>

        <div className="row-contact">
        <div className="col-sm-12 col-md-6 offset-md-3">
            <label for="fullname">Email</label>
                <input type="text" id="email" name="email" placeholder="your@email.com" required className="form-control" />
            </div>
        </div>

        <div className="row-contact">
        <div className="col-sm-12 col-md-6 offset-md-3">
                <label for="email">Telephone #</label>
                <input type="tel" id="phone" name="phone" placeholder="123-4567-890" required className="form-control" />
            </div>
        </div>

        <div className="row-contact">
        <div className="col-sm-12 col-md-6 offset-md-3">
                   <label for="message">Message</label>
                   <textarea name="message" id="message" className="form-control" placeholder="How can we help you?" required>
                       </textarea>
               </div>
           </div> 
    
           <div className="row-contact">
           <div className="col-sm-12 col-md-6 offset-md-3">
            <button type="submit" className="btn btn-lg btn-primary">Contact Us</button>
            </div>
            </div>
            </form>

        </Default>
    )
}