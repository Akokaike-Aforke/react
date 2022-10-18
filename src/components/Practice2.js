import troll from '../Images/memeimg.png';
import Star from './Star';
import { useState } from 'react'
function Practice2()
{
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false});

        // let starIcon = contact.isFavorite ? `${require ('../Images/star-filled.jpg')}`  :  `${require ('../Images/star-empty.png')}`;
        
        function ToggleFavorite()
        {
        setContact(prev => { return {...prev, isFavorite: !prev.isFavorite}})
        }
    return(
        <div className='Practice2'>
            <img className='troll' src={troll} />
            <Star isFilled={contact.isFavorite} 
             toggleFav = {ToggleFavorite}/>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    )
}
export default Practice2;

// import Star from './Star';
// function Practice2()
// {
//     return(
//         <div>
//             <div>hello</div>
//             <Star />
//         </div>
//     )
// }
// export default Practice2;