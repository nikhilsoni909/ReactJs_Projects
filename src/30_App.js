import React from "react"
import boxes from "./30_boxes.js"

export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)
    console.log(props.darkMode)
    const styles = {
        backgroundColor: props.darkMode === true ? "black" : "green",

    }
    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>
    ))
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    return (
        <main>
            {squareElements}
        </main>
    )
}
