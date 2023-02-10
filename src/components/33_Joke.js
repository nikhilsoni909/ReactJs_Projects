import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    function toggleShown() {

        setIsShown(prevShown => !prevShown)
    }

    //    syntax for ifelse render ignore it for now
    let btn;
    if (isShown) btn = <button onClick={toggleShown} className="button">Show Punchline</button>
    else
        btn = <button onClick={toggleShown} className="button">Hide Punchline</button>

    // we can use if condition also for punchline    
    // let ele;
    // if (isShown) ele = <h3>{props.punchline}</h3>

    return (
        <div>
            {props.setup && <h2>{props.setup}</h2>}
            {isShown && <h3>{props.punchline}</h3>}
            {/* {ele} */}


            {/* and operator* (this is good one aur iske niche wala baki bakwaas hai)/} */}
            {/* {!isShown && <button onClick={toggleShown} className="button">Show Punchline</button>}
            {isShown && <button onClick={toggleShown} className="button">Hide Punchline</button>} */}



            {/* or ternary (best for now)*/}
            <button onClick={toggleShown} className="button">{isShown ? "Hide" : "Show"} Punchline</button>




            {/* or  if else but we cant use ifelse directly we have to do it outside(ignore wlaa part dekho) or we  can use arrow function if we want to use if else  inside */}

            {/* {btn} */}



            {/* or if else with arrow function */}
            {/* {
                (() => {
                    if (isShown) return <button onClick={toggleShown} className="button">Show Punchline</button>
                    else
                        return <button onClick={toggleShown} className="button">Hide Punchline</button>
                })()
            } */}



            <hr />
        </div >
    )
}