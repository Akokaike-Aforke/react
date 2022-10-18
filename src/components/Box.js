import { useState } from "react";

function  Box(props)
{
    
    const backG = props.on ? "#222222" : "#cccccc"
    const styles = {
        backgroundColor: backG
    }

    

    return(
        //using the id property in the parent component
        //<div onClick={() => props.clicking(props.id)} style={styles} className='box'>{props.id}</div>
        
        //without using the id property in the parent component
        <div onClick={props.clicking} style={styles} className='box'>{props.id}</div>
    )}
    export default Box;








//Derived State.....
// function  Box(props)
// {
    
//     const [boxOn, setBox] = useState(props.on);
//     const backG = boxOn ? "#222222" : "#cccccc"
//     const styles = {
//         backgroundColor: backG
//     }

//     function changeColor()
//     {
//         setBox(prev => !prev)
        
        
//     }
    

//     return(
//         <div onClick={changeColor} style={styles} className='box'>{props.id}</div>
//     )
//export default Box;
