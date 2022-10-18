import { useState } from 'react';
import Boxes from './Boxes';
import Box from './Box';
function BoxesComponent()
{
   const[box, setBoxs] = useState( Boxes);
   //using c-style forLoop
//    function toggle(id)
//     {
//         setBoxs(prevBox => {
//             const newBox = [];
//             for(let i = 0; i < prevBox.length; i++)
//             {
//                 const currentBox = prevBox[i];
//                 if(currentBox.id === id)
//                 {
//                     const updatedBox = {...currentBox, on: !currentBox.on}
//                     newBox.push(updatedBox)
//                 }
//                 else{newBox.push(currentBox)}
//             }
//             return newBox;
//         })
//     }

function toggle(id)
{
    setBoxs(prevBox => {
        return prevBox.map((square) => 
        {return square.id == id ? {...square, on: !square.on} : square})})
}


   // MapBoxes = box.map(box => (<div style={styles} className='box' key={box.id}>{box.id}</div>))
    const MapBoxes = box.map(boxs => (
        //use id property
    // <Box 
    // key={boxs.id}
    // clicking={toggle} 
    // on={boxs.on} 
    // id={boxs.id}/>))

      //without using id property
    <Box
    key={boxs.id}
    clicking={() => toggle(boxs.id)}
    on={boxs.on}
    />))
    
    return(
        <main>
            <h1>Boxes will go here</h1>
            {MapBoxes}
        </main>
    )
}
export default BoxesComponent;

// export default function App() {
//     const[dark, setDark] = useState(false);
//     function toggle()
//     {
//         setDark(prev => !prev);
//     }
//     return (
//         <div className="container">
//             <Navbar darkMode={dark} toggleDarkMode={toggle}/>
//             <Main darkMode={dark} />
//         </div>
//     )
// }