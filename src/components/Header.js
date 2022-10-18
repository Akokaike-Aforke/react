import { useState } from "react";

function Header(props)
{
    return(
        <div>
            <h1>Goodbye{props.name}</h1>
        </div>
    )
}
export default Header;