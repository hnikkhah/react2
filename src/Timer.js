import React from 'react';

import './style.css'

var interval;
class Timer extends React.Component{
    constructor(){
      super();
      this.state={
        hour:0,
        minute:0,
        second:0,
        isStart:false

      }
    }
  
    start=() =>{
     if(this.state.isStart==false) {
      this.setState({
        isStart:true
      })
      
      interval= setInterval(() => {
            this.setState({
           second : this.state.second+1

          })
          if( this.state.second==60){
          this.setState({
            second:0,
            minute: this.state.minute +1
          })
          }
         if(this.state.minute==60)
         {this.setState({
         minute:0,
         hour: this.state.hour+1
         })
          
         }
          } , 1000)
    }
  }

    stop=() =>{
      this.setState({
        isStart:false})
        clearInterval(interval);
       
      }

     reset=() =>{
     
       this.stop();
       this.setState({
      hour:0,
      minute:0,
      second:0,
    })
  }

  render(){
    let s=this.state.second;
    let m=this.state.minute;
    let h=this.state.hour;
    return(  
      <>
     <h2 className="timer">
      {`${h>9?h:"0"+h}:${m>9?m:"0"+m}:${s>9?s:"0"+s}` }
     </h2>
 <div className="button_box">
  <span className="action-button" onClick={this.start}>start</span>
  <span className="action-button" onClick={this.stop}>stop</span>
  <span className="action-button" onClick={this.reset}>reset</span>

 </div>
 </>
     )}
  
    }
   export default Timer;