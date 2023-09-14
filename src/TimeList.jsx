import { useContext } from "react";
import Item from "./Item";
import { tastContext } from './tastContext';

const TimeList =(props) =>{
    const context =useContext(tastContext);
    return(
        <div className="main-time-list">
            { 
            context.timeArr.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))}
           
        </div>
    )
}
export default TimeList;
         