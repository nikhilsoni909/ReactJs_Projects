import React from "react"

export default function App() {

    const [isGoingOut, setIsGoingOut] = React.useState(true)
    function changeState() {
        setIsGoingOut(prevstate => !prevstate)
    }


    return (
                  
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeState} className="state--value">
                <h1>{isGoingOut===true?"True":"False"}</h1>
            </div>
        </div>
    )
}