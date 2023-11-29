export default function Meme() {
    return (
        <div className="meme-section">
            <form>
                <div className="two-inputs">
                    <input className="input-txt" type="text" placeholder="Top Text" />
                    <input className="input-txt" type="text" placeholder="Bottom Text" />
                </div>
                <input className="btn-submit" type="submit" value="Get a New Meme Image"/>
            </form>
        </div>
    )
}