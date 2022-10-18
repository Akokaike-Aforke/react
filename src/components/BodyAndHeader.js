import Body from "./Body"
import Header from "./Header"
import BoxesComponent from "./BoxesComponent";
import { useState } from "react";
import Practice3 from "./Practice3";
import Form from "./Form";
import Form2 from "./Form2";
import APIs from "./APIs";
import CountAPIs from "./CountAPIs";
import WindowTrackerApp from "./WindowTrackerApp";
function BodyAndHeader()
{
    const[user, setUser] = useState("Joe");
    return(
        <div>
            <Header name={user} />
            <Body name={user} />
            <BoxesComponent />
            <Practice3 />
            {/* <Form /> */}
            <Form2 />
            <APIs />
            <CountAPIs />
            <WindowTrackerApp />
        </div>
    )
}
export default BodyAndHeader;