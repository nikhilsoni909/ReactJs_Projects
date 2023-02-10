import React from 'react'
import ReactDOM from 'react-dom'
function App() {
    const firstname = "nikil";
    const lastname = "soni"

    return (
        <h1>hello {firstname}   {lastname}!</h1>
    )
}
function Time1() {
    const date = new Date();
    const hours = date.getHours() % 12;
    return (
        <h1>its curreently about {hours}!</h1>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))
ReactDOM.render(<Time1 />, document.getElementById("root1"))
