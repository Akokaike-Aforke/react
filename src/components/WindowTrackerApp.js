import { useState } from "react";
import WindowTracker from "./WindowTracker";
function WindowTrackerApp()
{
    const[show, setShow] = useState(true);
    function toggle()
    {
        setShow(prev => !prev)
    }
    return(
        <div>
            <button onClick={toggle}>Toggle WindowTracker</button>
            {show && <WindowTracker />}
        </div>
    )
}
export default WindowTrackerApp;