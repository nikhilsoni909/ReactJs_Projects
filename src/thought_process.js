import React from 'react'
import ReactDOM from 'react-dom'



const page = (
    <div>
        <h1>my awesome website</h1>
        <h3>reasons i love react</h3>
        <ol>
            <li>its a good app</li>
            <li>its a good app</li>
            <li>its a good app</li>

        </ol>

    </div>
)

ReactDOM.render(page, document.getElementById("root"))
// document.getElementById("root").append(JSON.stringify(page))


