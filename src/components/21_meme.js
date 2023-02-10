import React from 'react';
// import memesData from "./21_memesData.js"

export default function Meme() {
    // const [memeImg, setMemeImg] = React.useState("https://i.imgflip.com/23ls.jpg");
    // let url;
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/23ls.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([]);
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    console.log(allMemes);

    function getMemeImg() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        // console.log(url);
    }
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value,
        }))
    }
    return (

        <main>
            <div className="form">
                <input type="text"
                    className="form--input"
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input type="text"
                    className="form--input"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="form--button"
                    onClick={getMemeImg}

                >Get a New Meme Image </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>



    )
}