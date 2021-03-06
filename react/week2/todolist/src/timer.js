import React, { useState, useEffect } from "react";

function Timer() {
  const [TimerState, setTimerState] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTimerState((prev) => prev + 1);
    }, 1000);
  });
  return <span>You have used {TimerState} seconds in this website</span>;
}

export default Timer;
