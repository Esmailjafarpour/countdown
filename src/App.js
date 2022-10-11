import './App.css';
import React, {useState,useEffect} from 'react';
 

function App() {

const [days, setDays] = useState('');
const [hours, setHours] = useState('');
const [minutes, setMinutes] = useState('');
const [seconds, setSeconds] = useState('');

const [spinner, setSpinner] = useState(true);
const [countdown, setCountDown] = useState(false);

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

const updateCountdown = () => {
   
        const currentTime = new Date();
        const diffrent = newYearTime - currentTime;
        const  d = Math.floor(diffrent/1000/60/60/24);
        const  h = Math.floor(diffrent/1000/60/60) % 24;
        const  m = Math.floor(diffrent/1000/60) %60;
        const  s = Math.floor(diffrent/1000)%60;

        setDays(d);
        setHours(h < 10 ? '0' + h : h);
        setMinutes(m < 10 ? '0' + m : m);
        setSeconds(s < 10 ? '0' + s : s);

        setTimeout(() => {
          setSpinner(false);
          setCountDown(true)
        }, 1000);
        
      }

      // useEffect(()=>
      //   updateCountdown()
      // )
      setInterval(updateCountdown, 1000);
    
  return (
    <div className="App">
      <div className="year" id="year">{currentYear+1}</div>
      <h1>New Year CountDown</h1>

      {countdown && <div className="countDown" id="countDown">

          <div className="time">
              <h2 id="days">{days}</h2>
              <small>days</small>
          </div>
          <div className="time">
              <h2 id="hours">{hours}</h2>
              <small>hours</small>
          </div>
          <div className="time">
              <h2 id="minutes">{minutes}</h2>
              <small>minutes</small>
          </div>
          <div className="time">
              <h2 id="second">{seconds}</h2>
              <small>seconds</small>
          </div>
        </div>
      }
    
      {spinner && <div className="spinner" id="spinner">
                      <span className="loading"></span>
                  </div>
      }
    

    </div>
  )
}

export default App;
