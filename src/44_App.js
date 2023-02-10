import React from "react"
// not working
export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})


    console.log("component randered")

    // side effects
    React.useEffect(function () {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    })

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}


