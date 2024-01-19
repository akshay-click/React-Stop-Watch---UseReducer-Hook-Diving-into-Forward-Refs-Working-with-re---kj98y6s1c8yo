'use client'
import React, { useRef, useState } from 'react'

function Home() {

  const startTime = useRef(0);
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);

  const start = () => {
    startTime.current = Date.now() - currentTime;
    console.log("start button")
    console.log(startTime);
    intervalRef.current = setInterval(() => {
        // setCurrentTime(prevTime => prevTime + 0.010);
        
        const time = Date.now() - startTime.current;

        setCurrentTime(time/1000);

      }, 10);     

      // intervalRef.current = intervalId;
  }

  const stop = () => {
    console.log("stop button")
    console.log(intervalRef);
    console.log(startTime);
    clearInterval(intervalRef.current);
  }

  const reset = () => {
    console.log("reset button")
    stop();
    setCurrentTime(0);
    setLaps([]);
  }

  const handleLap =()=>{
    console.log("lap button")
    setLaps(prev=>[...prev, currentTime.toFixed(3)])


  }



  return (
    <div id="main">
      <section>
        <h1 className='seconds-elapsed'>{currentTime.toFixed(3)}</h1>
        <section className='buttons'>
          <button className="start-btn" onClick={start}>START</button>
          <button className="stop-btn" onClick={stop}>STOP</button>
          <button className="lap-btn" onClick={handleLap}>LAP</button>
          <button className="reset-btn" onClick={reset}>RESET</button>
        </section>
      </section>
      {laps.length != 0 && <section className='lap-section'>
        <h2>Laps</h2>
        <section className='laps'>
         { laps.map((lap,index) => {
            return <p key={index}>{lap}</p>
          })}
        </section>
      </section>}
    </div>
  )
}

export default Home
