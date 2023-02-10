import React from "react"

export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png";
    return (
        <img
            src={require(`./images/${starIcon}`)}
            className="card--favorite"
            onClick={props.nikclick}//here we are just changing nikclick to original onClick so that it will work again
        />
    )
}


