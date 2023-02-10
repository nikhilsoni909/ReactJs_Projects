// this a a header componant  of project 12
import React from "react";
import reactlogo from "../images/logo512.png";
export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={reactlogo} className="nav-logo" />
                <ul className="nav-items">
                    <li>pricing  </li>
                    <li>about  </li>
                    <li>contents </li>

                </ul>
            </nav>
        </header>)

}   