import React from "react"

export default function App() {

    const [result, count] = React.useState(0)
    function plus() {

        // count(result + 1);
        // or
        count(function (oldval) {
            return oldval + 1;
        })
    }
    function minus() {
        // count(result - 1);
        // or 
        count(oldval => oldval - 1)
    }
    function reset() {
        count(0);
        // or
        // count(function () {
        //     return 0;
        // })
    }
    return (
        <div className="counter">
            <button onClick={minus} className="counter--minus">-</button>
            <div onClick={reset} className="counter--count">
                <h1>{result}</h1>
            </div>
            <button onClick={plus}
                className="counter--plus">+</button>
        </div>
    )
}