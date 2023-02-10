import React from 'react';
import ReactDOM from 'react-dom';
import "./22_onClick.css"
function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    // here items will be added in array but  not in our UI for adding them also in UI we need to use states
    function addItem() {
        const newthing = `Thing ${thingsArray.length + 1}`
        thingsArray.push(newthing)
        console.log(thingsArray)
    }
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));