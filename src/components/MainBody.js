import Component1 from "./Component1";
import MainComponents from "./MainComponents";
import Split from 'react-split'
function MainBody()
{
    return(
        <div className="mainBody">
            <Split
            sizes={[25, 75]}
            minSize={100}>
                <Component1 />
                <MainComponents />
            </Split>    
            
        
        </div>
    )
}
export default MainBody;