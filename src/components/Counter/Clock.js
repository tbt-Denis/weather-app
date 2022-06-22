import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [state, setState] = useState('');

  useEffect(() => {
    const interval =  setInterval(() => {
      setState(currentTime())
    }, 1000)
    return () => {
      clearInterval(interval)
    };
  }, [state]);


  const clockStyles = {
    alignSelf: 'flex-end',
    fontSize: '2rem',
    fontFamily: 'Helvetica, sans-serif',
    fontStyle: 'italic'
  }

  const currentTime = () => {
    
    let date = new Date()

    const clock = {
      hh: date.getHours(),
      mm: date.getMinutes(),
      ss: date.getSeconds(),
      session: "AM"
    }
    

    if(clock.hh == 0){
      clock.hh = 12;
    }
    if(clock.hh > 12){
      clock.hh = clock.hh - 12;
      clock.session = "PM";
     }
  
     clock.hh = (clock.hh < 10) ? "0" + clock.hh : clock.hh;
     clock.mm = (clock.mm < 10) ? "0" + clock.mm : clock.mm;
     clock.ss = (clock.ss < 10) ? "0" + clock.ss : clock.ss;
      
     let time = clock.hh + ":" + clock.mm + ":" + clock.ss + " " + clock.session;
     return time
  }

  return (
    <div style={clockStyles}>
      {state}
    </div>
  )
}

export default Clock;