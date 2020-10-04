import React, { useState } from "react";
import "../styles.css";
import Watch from "./Watch";
import Lap from "./Lap";
import Footer from "./Footer";
import ButtonComponent from "./ButtonComponent";
import TimerIcon from "@material-ui/icons/Timer";

function App() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliSec: 0
  });
  const [status, setStatus] = useState(0);
  const [lapTime, setLapTime] = useState({
    hr: 0,
    mn: 0,
    sec: 0,
    ms: 0
  });
  const [interval, setInterv] = useState();
  const [Laps, setLaps] = useState([]);

  function handleStart() {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  }

  function run() {
    if (time.minutes === 60) {
      time.hours += 1;
      time.minutes = 0;
    }
    if (time.seconds === 60) {
      time.minutes += 1;
      time.seconds = 0;
    }
    if (time.milliSec === 100) {
      time.seconds += 1;
      time.milliSec = 0;
    }
    time.milliSec += 1;
    setLapTime({
      hr: time.hours,
      mn: time.minutes,
      sec: time.seconds,
      ms: time.milliSec
    });
    return setTime({
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
      milliSec: time.milliSec
    });
  }
  function handlePause() {
    clearInterval(interval);
    setStatus(2);
  }

  function handleReset() {
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliSec: 0
    });
    clearInterval(interval);
    setLaps([]);
    setStatus(0);
  }

  function handleLaps() {
    setLaps((prevLaps) => {
      return [...prevLaps, lapTime];
    });
    console.log(Laps);
  }

  return (
    <div className="App">
      <h1>Stop-Watch</h1>
      <span>
        <TimerIcon fontSize="large" />{" "}
      </span>

      <Watch time={time} />
      <ButtonComponent
        start={handleStart}
        pause={handlePause}
        reset={handleReset}
        laps={handleLaps}
        status={status}
      />
      {Laps.map((lap, index) => {
        return (
          <Lap key={index} hr={lap.hr} mn={lap.mn} sec={lap.sec} ms={lap.ms} />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
