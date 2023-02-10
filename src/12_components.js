import React from 'react'
import ReactDOM from 'react-dom'
import "./12_components.css"
import Header from "./components/12_header.js"
import Footer from "./components/12_footer.js"
import Content from "./components/12_content.js"




function Page() {
    return (
        <>
            <Header />
            <Content />

            <Footer />
        </>
    )
}
ReactDOM.render(<Page />, document.getElementById('root'))