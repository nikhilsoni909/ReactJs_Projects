import React from "react"
import mail from "./images/mail-icon.png"
import phone from "./images/phone-icon.png"
import cat1 from "./images/mr-whiskerson.png"
import cat2 from "./images/fluffykins.png"
import cat3 from "./images/felix.png"
import cat4 from "./images/pumpkin.png"
import Contact from "./components/17_components.js"

function App() {
    return (
        <div className="contacts">
            <Contact
                img={cat1}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img={cat2}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img={cat3}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"

            />
            <Contact
                img={cat4}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@gamil.com"

            />


        </div >
    )
}

// or

//  function App() {
//     return (
//         <div className="contacts">

// <div className="contact-card">
//     <img src={cat1} />
//     <h3>Mr. Whiskerson</h3>
//     <div className="info-group">
//         <img src={phone} />
//         <p>(212) 555-1234</p>
//     </div>
//     <div className="info-group">
//         <img src={mail} />
//         <p>mr.whiskaz@catnap.meow</p>
//     </div>
// </div>

//             <div className="contact-card">
//                 <img src={cat2} />
//                 <h3>Fluffykins</h3>
//                 <div className="info-group">
//                     <img src={phone} />
//                     <p>(212) 555-2345</p>
//                 </div>
//                 <div className="info-group">
//                     <img src={mail} />
//                     <p>fluff@me.com</p>
//                 </div>
//             </div>

//             <div className="contact-card">
//                 <img src={cat3} />
//                 <h3>Felix</h3>
//                 <div className="info-group">
//                     <img src={phone} />
//                     <p>(212) 555-4567</p>
//                 </div>
//                 <div className="info-group">
//                     <img src={mail} />
//                     <p>thecat@hotmail.com</p>
//                 </div>
//             </div>

//             <div className="contact-card">
//                 <img src={cat4}/>
//                 <h3>Pumpkin</h3>
//                 <div className="info-group">
//                     <img src={phone} />
//                     <p>(0800) CAT KING</p>
//                 </div>
//                 <div className="info-group">
//                     <img src={mail} />
//                     <p>pumpkin@scrimba.com</p>
//                 </div>
//             </div>

//         </div>
//     )
// }

export default App