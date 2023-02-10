import React from 'react'
import ReactDOM from 'react-dom'
import "./components11.css"
import logo from "./images/logo512.png"
function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="nav-logo" />

                {/* <img src="logo512.png" className="nav-logo" /> */}
                {/* here we are directly using logo512 idk how ?? and its working(logo is in images)*/}
                <ul className="nav-items">
                    <li>pricing  </li>
                    <li>pricing  </li>
                    <li>about  </li>
                    <li>content  </li>

                </ul>
            </nav>
        </header>)

}
function Footer() {
    return (

        <footer>

            <small>@nik, all rights are reversed  </small>
        </footer>

    )
}
function Content() {
    return (

        <div>

            <h1>reasons I love react coz its awesome</h1>

            <ol>
                <li>its fucking awesome</li>
                <li>its fucking awesome</li>
                <li>its fucking awesome</li>
                <li>its fucking awesome</li>
                <li>its fucking awesomsdfsdfde</li>
            </ol>
        </div>

    )
}

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