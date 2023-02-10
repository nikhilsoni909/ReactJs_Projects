import React from 'react';
import ReactDOM from 'react-dom';
import "./26_styles.css"
function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    function addItem() {
      
    }
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));