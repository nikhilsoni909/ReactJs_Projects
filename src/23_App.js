import React from "react"

// state example
// export default function App() {
//     // const result = React.useState("no");
//     const [result, func] = React.useState("yes");
//     console.log(result);
//     return (
//         <div className="state">
//             <h1 className="state--title">Is state important to know?</h1>
//             <div className="state--value">
//                 {/* <h1>{result[0]}</h1> */}
//                 <h1>{result}</h1>

//             </div>
//         </div>
//     )
// }

// change state value by function
export default function App() {
    const [result, func] = React.useState("yes");

    function change() {
        if (result === "yes")
            func("no");
        else {
            func("yes")
        }
    }
    console.log(result);
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div onClick={change} className="state--value">
                <h1 >{result}</h1>

            </div>
        </div>
    )
}
