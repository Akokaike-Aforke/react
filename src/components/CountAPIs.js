import { useEffect, useState } from "react"

function CountAPIs()
{
    const[count, setCount] = useState(0);
    function add()
    {
        setCount(prev => prev + 1);
    }
    useEffect(() => console.log("use effect ran"), [1])
    return(
        <div>
            <h1>There are {count} oranges</h1>
            <button onClick={add}>Add</button>
        </div>
    )
}
export default CountAPIs;