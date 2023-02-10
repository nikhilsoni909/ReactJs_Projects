import React from "react"
import WindowTracker from "./components/48_WindowTracker.js"
 
export default function App() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    const [show,setShow]=React.useState(true)
    function toggle(){
        setShow(prev=>!prev);
    }
    
    return (
        <div className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
           {show&& <WindowTracker />}
        </div>
    )
}
