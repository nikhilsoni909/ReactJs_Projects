import React from 'react'
import Navbar from "./components/14_navbar.js"
import Hero from "./components/14_hero.js"
import Card from "./components/14_card.js"
import data from "./components/14_data.js"
// import img1 from "./images/katie-zaferes.png"
export default function App() {

    const cards = data.map(item => {
        return (
            <Card
                key={item.id}

                // item={item} 2
                   
                 {...item}//3
                //    or

                // older code//1
                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // openSpots={item.openSpots}
            />
        )
    })

    return (

        <div>
            <Navbar />
            <Hero />
            <section className="card--list">
                {cards}
            </section>

        </div>

    );


    // old hardcoded
    // return (
    //     <>
    //         <Navbar />
    //         <Hero />
    // <Card
    //     //    img={img1}
    //     // img={require("./images/katie-zaferes.png")}
    //     img="katie-zaferes.png"
    //     rating="5.0"
    //     reviewCount={6}
    //     location="USA"
    //     title="Life Lessons with Katie Zaferes"
    //     price={400}

    // />
    //     </>
    // )
}