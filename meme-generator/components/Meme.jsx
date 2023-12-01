import React from "react"
import memesData from "../memesData"

export default function Meme() {

    // State object for each meme
    const [meme, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    // State for all memes
    const [allImages, setAllImages] = React.useState(memesData)

    function getRandomMeme() {
        const randNumber = Math.floor((Math.random() * allImages.data.memes.length))
        console.log(randNumber)

        const url = allImages.data.memes[randNumber].url
        console.log(url)
        setMemeImage(previousMemeObj => {
            return (
                {
                    ...meme,
                    randomImage: url
                }
            )
        })
    }

    return (
        <div className="meme-section">

            <div className="two-inputs">
                <input className="input-txt" type="text" placeholder="Top Text" />
                <input className="input-txt" type="text" placeholder="Bottom Text" />
            </div>

            <input onClick={getRandomMeme} className="btn-submit" type="submit" value="Get a New Meme Image"/>

            <img className="meme-img" src={meme.randomImage} />

        </div>
    )
}