import memesData from "../memesData"

export default function Meme() {

    function handleButtonClick() {
        const randNumber = Math.floor((Math.random() * 100))
        console.log(randNumber)
        
        console.log(memesData.data.memes[randNumber].url)
    }

    return (
        <div className="meme-section">

            <div className="two-inputs">
                <input className="input-txt" type="text" placeholder="Top Text" />
                <input className="input-txt" type="text" placeholder="Bottom Text" />
            </div>

            <input onClick={handleButtonClick} className="btn-submit" type="submit" value="Get a New Meme Image"/>

        </div>
    )
}