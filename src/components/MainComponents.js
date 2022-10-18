import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import Practice from "./Practice";
import ClickHandler from "./ClickHandler";
import Practice2 from "./Practice2";
import Count from "./Count";
import Header from "./Header";
import Body from "./Body";
import BodyAndHeader from "./BodyAndHeader";
import BoxesComponent from "./BoxesComponent";
import Memes from "./Memes";

function MainComponents()
{
    return(
        <div className="mainComponents">
            {/* <Component2 /> */}
            <Memes />
            {/* <Practice />
            <Practice2 />
            <ClickHandler /> */}
            <BodyAndHeader />
            
        </div>
    )
}
export default MainComponents;