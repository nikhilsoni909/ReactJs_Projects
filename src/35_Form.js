import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    // console.log(event.target.value) 
    console.log("firstname is" + firstName)

    function handleChange(event) {
        setFirstName(event.target.value)
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}
