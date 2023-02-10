import React from "react";
import star from "../images/star.png";


// export default function Card(props) {     2
//     let badgeText
//     if (props.item.openSpots === 0) {
//         badgeText = "SOLD OUT";

//     }
//     else if (props.item.location === "Online") {
//         badgeText = "ONLINE";
//     }
//     return (
//         <div className="card">
//             {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
//             {badgeText && <div className="card--badge">{badgeText}</div>}

//             <img src={require(`../images/${props.item.coverImg}`)} className="card--image" />

//             <div className="card--stats">
//                 <img src={star} className="card--star"></img>
//                 <span> {props.item.stats.rating}</span>
//                 <span className="gray">({props.item.stats.reviewCount})*</span>
//                 <span className="gray">{props.item.location}</span>
//             </div>
//             <p>{props.item.title} </p>
//             <span className="bold"> <p>From ₹{props.item.price}/person  </p> </span>

//         </div >
//     )
//     }




export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";

    }
    else if (props.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
            {badgeText && <div className="card--badge">{badgeText}</div>}

            <img src={require(`../images/${props.coverImg}`)} className="card--image" />

            <div className="card--stats">
                <img src={star} className="card--star"></img>
                <span> {props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})*</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title} </p>
            <span className="bold"> <p>From ₹{props.price}/person  </p> </span>

        </div >
    )
}







    // older done by passing seperate properties   1
    // export default function Card(props) {
    // let badgeText
    // if (props.openSpots === 0) {
    //     badgeText = "SOLD OUT";

    // }
    // else if (props.location === "Online") {
    //     badgeText = "ONLINE";
    // }
    // return (
    //     <div className="card">
    //         {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
    //         {badgeText && <div className="card--badge">{badgeText}</div>}

    //         <img src={require(`../images/${props.img}`)} className="card--image" />

    //         <div className="card--stats">
    //             <img src={star} className="card--star"></img>
    //             <span> {props.rating}</span>
    //             <span className="gray">({props.reviewCount})*</span>
    //             <span className="gray">{props.location}</span>
    //         </div>
    //         <p>{props.title} </p>
    //         <span className="bold"> <p>From ₹{props.price}/person  </p> </span>

    //     </div >
    // )
// }