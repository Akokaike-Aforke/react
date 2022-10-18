 import { useState } from "react";
 import Count from "./Count";
function ClickHandler()
{
    const [num, setNum] = useState(0);
    function AddItem()
    {
        setNum(prev => prev + 1);
    }
    function MinusItem()
    {
        //ensure that the number does not get below 0
        {num>=1 && setNum(prev => prev - 1);}
    }
    
    return(
        <div className="clickHandler">
            <Count number={num} />
            <button className="minus" onClick={MinusItem}><p className="para1">-</p></button>
            <button className="plus"  onClick={AddItem}><p className="para2">+</p></button>
        </div>
    )
} 
export default ClickHandler;











// import { useState } from 'react';
// const ClickHandler = () => {
//     const [num, setNum] = useState(0);
//     function Add()
//     {
//         setNum((prevCount) => prevCount + 1);
//     }
//     function Minus()
//     {
//         setNum((prevCount) => prevCount - 1);
//     }
//     return (
//         <div>
//             <button onClick={Minus}>-</button>
//             <div>
//                 <h1>{num}</h1>
//             </div>
//             <button onClick={Add}>+</button>
//         </div>
//     )
// }
// export default ClickHandler;