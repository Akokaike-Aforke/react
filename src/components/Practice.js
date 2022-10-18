import { useState } from 'react'
// function Practice()
// {
//     const arr = ["thing 1", "thing 2"];
//     const [arrNum, setArr] = useState([...arr]);
//     function AddItem()
//     {
//         setArr((prevArr) => [...prevArr, `thing ${prevArr.length + 1}`])
//     }
//     const finalArr = arrNum.map(element => <p key={element}>{element}</p>)
//     return (
//         <div>
//             <button onClick={AddItem}>Add Item</button>
//             {finalArr}
//         </div>
//     )
// }
// export default Practice;


function Practice()
{
    const [contact, setContact] = useState({firstName: "John", lastName: "Joe", Age: 15});
    return(
        <div>
            <p>{contact.Age}</p>
        </div>
    )
}
export default Practice;