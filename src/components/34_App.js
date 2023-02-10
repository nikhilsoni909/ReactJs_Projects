import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    return (
        <div>
            {
                messages.length === 0 ?
                    <h1>you are all caught up</h1> :
                    <h1>You have {messages.length} {messages.length > 1 ? "messages" : "message"} </h1>
            }
        </div>
    )
}
