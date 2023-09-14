import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import  Hello from './Hello'
import Timer from './Timer'
import TimeList from './TimeList';
import { tastContext } from './tastContext';
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       title:"سلام"
//     }
//   }
//   handleTitle=()=>{
//     this.setState({
//       title:"خوش آمدید"
//     })
//   }
//     render(){
//     return(
//       <div className="main">
//         <Hello title={this.state.title}/>
//         <Timer handleTitle={this.handleTitle}/></div>
//       )}
//      }
//      
const App = ()=>{
  const [title,setTitle]=useState("سلامان");
  const [isLight,setIsLight]=useState(false);
  const [timeArr, seTimeArr]=useState(["00:05:12","00:03:15"]);

  useEffect(()=>{
    console.log("useEffect");
  },[isLight])

const handleSetIsLight =()=>{
 setIsLight( !isLight)
}
  const handleTiltle =()=>{
    setTitle("خوش")
  }
return(
 <tastContext.Provider value={{
  timeArr:timeArr,
  seTimeArr:seTimeArr 
 }}>
    <div className="main" style={{background:isLight?"white":"black"}}>
         <Hello title={title}/>
          <Timer 
           isLight={isLight} 
            handleSetIsLight={handleSetIsLight}/>
             <TimeList />
    </div>
    </tastContext.Provider>
)
}


export default App;