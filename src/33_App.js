import React from "react"
import Joke from "./components/33_Joke.js"
import jokesData from "./components/20_jokedata.js"

export default function App() {
    const jokeElements = jokesData.map(joke => {
        return (
            <Joke
                key={joke.id}
                setup={joke.setup}
                punchline={joke.punchline}
            />
        )
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}
