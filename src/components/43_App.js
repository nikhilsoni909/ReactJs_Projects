import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})

    console.log("component randered")

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => console.log(data))


    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
