import React from "react";
import logo from "../images/logo512.png"

export default function Navbar() {
    return <>
        <nav>
            <img src={logo} width="50px" className="nav--icon" />
            <h3 className="nav--logo_text">react facts course </h3>
            <h4 className="nav--title">project : 1</h4>
        </nav>

    </>
}