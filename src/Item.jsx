import { useContext } from "react";
import { tastContext } from "./tastContext";

const Item=(props)=>{
    const context =useContext(tastContext);
   const  handleDelteItem=(e)=>{
    context.seTimeArr(context.timeArr.filter(t=>t!=e.target.innerHTML))
   }
    return(
        
        <div className="time-item" onClick={handleDelteItem}>{props.children}</div>
    )
}
export default Item;