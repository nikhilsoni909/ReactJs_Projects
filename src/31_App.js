import React from "react"
import boxes from "./30_boxes.js"
import Box from "./components/30_box.js"
export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)

    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on} />
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
