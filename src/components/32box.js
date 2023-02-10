import React from "react";

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent",
    }
    console.log(props.toggle)

    return (
        <div style={styles}
            className="box"
            //1 onClick={() => props.toggle(props.id)} 
            // or 2
            onClick={props.toggle}



        ></div>
    )
}