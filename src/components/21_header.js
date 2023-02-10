import React from "react"


export default function Header() {
    return (
        <header className="header">
            <img className="header--img" src={require(`../images/troll-face.png`)} />
            <h2 className="header--title">MEME GENERATOR</h2>
            <h4 className="header-project">React Course-Project:3</h4>

        </header >
    )
}
