import React from "react";
import grid from "../images/photo-grid.png"
export default function Hero() {
    return (
        <section className="hero">
            <img src={grid} className="hero--photo" />
            <h1 className="hero--header">Online Experiances</h1>
            <p className="hero--text">join us we will make your life heaven beleif us we
                are not "from network marketing" we are the best of all we will make sure that you will be placed in google</p>
        </section>
    )
}