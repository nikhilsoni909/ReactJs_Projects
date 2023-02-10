import React from 'react'
import ReactDOM from 'react-dom'



const page = (
    <div>
        <img src="./logo512.png" width="40px" />
        <h1  >fun facts :</h1>
        <ol>
            <li>its a good app</li>
            <li>its a good app</li>
            <li>its a good app</li>

        </ol>

    </div>
)

ReactDOM.render(page, document.getElementById("root"))
// document.getElementById("root").append(JSON.stringify(page))this willl give a js object