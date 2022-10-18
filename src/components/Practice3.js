import { useState } from "react";
//example 1
// function Practice3()
// {
//     const[messages, setMessages] = useState([])
//     return(
//         <div>
//             {messages.length > 0 && <h1>You have {messages.length} messages</h1>}
//         </div>
//     )
// }
// export default Practice3;

function Practice3()
{
    const[messages, setMessages] = useState(['a', 'kiej', 0])
    return(
        <div>
            <p>{messages.length === 0 ? "You are all caught up": messages. length === 1 ? "You have " + messages.length + " unread message" : "You have " + messages.length + " unread messages"}</p>
        </div>
    )
}
export default Practice3;