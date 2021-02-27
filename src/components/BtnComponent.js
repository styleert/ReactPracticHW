import React from 'react'

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0)? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-gre"
        onClick={props.start}>Start</button> 
          <button className="stopwatch-btn stopwatch-btn-red"
                  onClick={props.stop}>Stop</button>
          <button className="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      
      }

     {(props.status === 1)? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-gre"
                  onClick={props.resume}>Continue</button>
                         <button className="stopwatch-btn stopwatch-btn-red"
                  onClick={props.stop}>Stop</button>
          <button className="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }
     
    </div>
  );
}

export default BtnComponent;
