import meme2 from '../Images/memeimg.png'
import Data from './Data';
import { useState } from 'react';
function Component2()
{
    // const [memeImage, setMemeImage] = useState('');
    
    // const[message, setMessage] = useState(true);
    // function Click()
    // {
    //     setMessage((prevState) => !prevState);
    // }

    // const newMessage = message ? "Yes" : "No";

    const [meme, setMeme] = useState({topText: "", bottomText: "", randomImage: "https://i.imgflip.com/30b1gx.jpg"})
    const [allMemeImages, setAllMemeImages] = useState(Data)
    
    function handleClick()
    {
        const memes = allMemeImages.data.memes[Math.floor(Math.random() * allMemeImages.data.memes.length)];
        const url = memes.url;
        setMeme(prev => ({...prev, randomImage: url}));

    }

    function handleOnChange(event)
    {
         const{name, value} = event.target;
        setMeme(prev => ({...prev, [name]: value}));

    }
    console.log(meme.topText)
    return(
        <main>
            <div className="component2">
                <input 
                type="text" 
                className="component2Input1" 
                placeholder="Top text" 
                name="topText" 
                value={meme.topText}
                onChange={handleOnChange}
                />
                
                <input 
                type="text" 
                className="component2Input2" 
                placeholder="Bottom text" 
                name="bottomText"
                value={meme.bottomText}
                onChange={handleOnChange}
                />
                <button className="buttonMeme" onClick={handleClick}>Get a new meme image  🖼</button>
            </div>
                <div className="component4">
                <img className="component4Img" src={meme.randomImage} />
                <div className="component4Badge1">{meme.topText}</div>
                <div className="component4Badge2">{meme.bottomText}</div>
                
            </div>
            {/* <button onClick={Click}>Click</button>
                <p>{newMessage}</p> */}
        </main>
        
    )
}
export default Component2;