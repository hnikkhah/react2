import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import  Hello from './Hello'
import Timer from './Timer'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      title:"سلام"
    }
  }
  handleTitle=()=>{
    this.setState({
      title:"خوش آمدید"
    })
  }
    render(){
    return(
      <div className="main">
        <Hello title={this.state.title}/>
        <Timer handleTitle={this.handleTitle}/></div>
      )}
     }
     export default App;