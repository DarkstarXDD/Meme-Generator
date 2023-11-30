import React from "react"
import memesData from "../memesData"

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")

    function getRandomMeme() {
        const randNumber = Math.floor((Math.random() * memesData.data.memes.length))
        console.log(randNumber)

        const url = memesData.data.memes[randNumber].url
        console.log(url)
        setMemeImage(url)
    }

    return (
        <div className="meme-section">

            <div className="two-inputs">
                <input className="input-txt" type="text" placeholder="Top Text" />
                <input className="input-txt" type="text" placeholder="Bottom Text" />
            </div>

            <input onClick={getRandomMeme} className="btn-submit" type="submit" value="Get a New Meme Image"/>

            <img className="meme-img" src={memeImage} />

        </div>
    )
}