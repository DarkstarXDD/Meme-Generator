export default function Meme() {
    return (
        <div className="meme-section">
            <form>
                <div className="two-inputs">
                    <input className="first-input input-txt" type="text" placeholder="shut up" />
                    <input className="second-input input-txt" type="text" placeholder="and take my money" />
                </div>
                <input className="btn-submit" type="submit" value="Get a New Meme Image"/>
            </form>
        </div>
    )
}