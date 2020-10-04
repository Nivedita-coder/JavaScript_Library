import React from "react";
import "../styles.css";
function ButtonComponent(props) {
  // function start() {
  //   props.start();
  // }
  return (
    <div>
      {props.status === 0 ? (
        <button className="stopwatch-btn start-btn" onClick={props.start}>
          Start
        </button>
      ) : (
        ""
      )}
      {props.status === 1 ? (
        <button className="stopwatch-btn pause-btn" onClick={props.pause}>
          Pause
        </button>
      ) : (
        ""
      )}
      {props.status === 2 ? (
        <button className="stopwatch-btn resume-btn" onClick={props.start}>
          Resume
        </button>
      ) : (
        ""
      )}

      <button className="stopwatch-btn reset-btn" onClick={props.reset}>
        Reset
      </button>
      <button className="stopwatch-btn lap-btn" onClick={props.laps}>
        Lap
      </button>
    </div>
  );
}
export default ButtonComponent;
