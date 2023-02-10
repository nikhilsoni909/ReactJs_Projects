import React from "react"

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useState(() => {
        window.addEventListener("resize", function () {
            setWindowWidth(window.innerWidth)
        })
    }, [])
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
