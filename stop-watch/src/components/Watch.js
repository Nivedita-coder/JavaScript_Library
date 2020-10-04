import React from "react";

function Watch(props) {
  // useEffect(() => {
  //   setInterval(() => {
  //     setTime((time.seconds += 1));
  //     console.log(time.seconds);
  //   }, 1000);
  // }, [time]);
  function hr() {
    if (props.time.hours === 0) {
      return "";
    } else {
      return (
        <span>
          {props.time.hours >= 10 ? props.time.hours : "0" + props.time.hours}
        </span>
      );
    }
  }

  return (
    <div className="watch">
      {hr()}&nbsp;&nbsp;
      <span>
        {props.time.minutes >= 10
          ? props.time.minutes
          : "0" + props.time.minutes}
      </span>
      &nbsp;:&nbsp;
      <span>
        {props.time.seconds >= 10
          ? props.time.seconds
          : "0" + props.time.seconds}
      </span>
      &nbsp;:&nbsp;
      <span>
        {props.time.milliSec >= 10
          ? props.time.milliSec
          : "0" + props.time.milliSec}
      </span>
    </div>
  );
}
export default Watch;
