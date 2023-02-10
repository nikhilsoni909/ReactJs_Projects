import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        { firstName: "", lastName: "", email: "", comments: "", isFrindly: true }
    )
    console.log(formData.comments)
    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            {/* <textarea>hello world</textarea> */}
            <textarea
                value={formData.comments}
                placeholder="comments"
                onChange={handleChange}
                name="comments"
            />
            <input
                type="checkbox"
                id="isFrindly"
                checked={formData.isFrindly}
                onChange={handleChange}
                name="isFrindly"
            />
            <label htmlFor="isFrindly">are you frinedly</label>
        </form>
    )
}
