import React from "react"
import mail from "../images/mail-icon.png"
import phone from "../images/phone-icon.png"
import cat1 from "../images/mr-whiskerson.png"

export default function Component() {

   return(
       <div className="contact-card">
           <img src={cat1} />
           <h3>Mr. Whiskerson</h3>
           <div className="info-group">
               <img src={phone} />
               <p>(212) 555-1234</p>
           </div>
           <div className="info-group">
               <img src={mail} />
               <p>mr.whiskaz@catnap.meow</p>
           </div>
       </div>
   )
}