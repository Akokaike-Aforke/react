import { useEffect, useState } from "react";

function APIs()
{
    const[starWarsData, setStarWarsData] = useState({});
    const[count, setCount] = useState(1);
    function add ()
    {
        setCount(prev => prev + 1);
    }
    // fetch("https://swapi.dev/api/people/1")
    //       .then(res => res.json())
    //       .then(data => setStarWarsData(data))

    useEffect(() => {
        console.log("effect ran again")
        fetch(`https://swapi.dev/api/people/${count}`)
    .then(res => res.json())
    .then(data => setStarWarsData(data))}, [count])
    return(
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h1>there are {count} oranges</h1>
            <button onClick={add}>Add</button>
        </div>
    )
}
export default APIs;