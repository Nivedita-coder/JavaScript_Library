import React from "react";

function Lap(props) {
  return (
    <div>
      <li className="lap">
        {/* {props.hr} : {props.mn} : {props.sec} :{props.ms} */}
        <span>{props.mn >= 10 ? props.mn : "0" + props.mn}</span>
        &nbsp;:&nbsp;
        <span>{props.sec >= 10 ? props.sec : "0" + props.sec}</span>
        &nbsp;:&nbsp;
        <span>{props.ms >= 10 ? props.ms : "0" + props.ms}</span>
      </li>
    </div>
  );
}
export default Lap;
