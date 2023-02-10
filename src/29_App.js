import React from "react"
import Star from "./29_Star.js"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let staricon = contact.isFavorite ? "star-filled.png" : "star-empty.png";
    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    return (
        <main>
            <article className="card">
                <img src={require("./images/user.png")} className="card--image" />
                <div className="card--info">
                     <Star isFilled={contact.isFavorite} nikclick={toggleFavorite}/>
             {  /*  here we are passing togglefavourate funciton  to our child component Star */}
                   
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
