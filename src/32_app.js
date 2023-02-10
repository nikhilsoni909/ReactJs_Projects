import React from "react"
import boxes from "./30_boxes.js"
import Box from "./components/32box.js"
export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)

    function toggle(id) {
        // setSquares(prevSquare => {
        //     const newSquares = []
        //     for (let i = 0; i < prevSquare.length; i++) {
        //         const currentSquare = prevSquare[i];
        //         if (currentSquare.id === id) {
        //             const updatedSquare = {
        //                 ...currentSquare,
        //                 on: !currentSquare.on
        //             }
        //             newSquares.push(updatedSquare);

        //         } else {
        //             newSquares.push(currentSquare);
        //         }
        //     }
        //     return newSquares;
        // })
        // or
        setSquares(prevSquare => {
            return prevSquare.map((square) => {
                return square.id === id ? { ...square, on: !square.on } : square;
            })
        })
    }
    const squareElements = squares.map(square => (
        <Box key={square.id}
         id={square.id} 
         on={square.on} 
        // 1 toggle={toggle}
        // or 2
        toggle={()=>toggle(square.id)}
          />
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
