import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})

    // console.log("Component rendered")
    // this will console.log at every second 

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
