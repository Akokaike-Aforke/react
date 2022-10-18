import './style.css'
import Meme from '../Images/Troll Face.png'
function Component1()
{
    return(
        <div className="component1">
            <img className="meme" src={Meme} />
            <p className="memeParagraph1">Meme Generator</p>
            <p className="memeParagraph2">React Course - Project 3</p>
        </div>
    )
}
export default Component1;