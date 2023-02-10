import React from "react"
import Joke from "./components/18_joke.js"
import jokesData from "./components/20_jokedata.js"

export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke
            setup={joke.setup}
            punchline={joke.punchline}
        />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}