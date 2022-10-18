import { useEffect, useState } from "react";

function WindowTracker()
{
    const[windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        function watchWidth(){
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize",  watchWidth)
        
        return function()
        {
            window.removeEventListener("resize", watchWidth)
        }
       }, [])
    return(
        <div>
            <h1>Window width: {windowWidth}</h1>
        </div>
    )
}
export default WindowTracker;