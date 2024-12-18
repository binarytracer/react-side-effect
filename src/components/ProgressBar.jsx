import { useState, useEffect } from "react";

export default function ProgressBar(props) {
  const { duration } = props;

  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    console.log("timer trigered");
    const interval = setInterval(() => {
      setRemainingTime((prevValue) => prevValue - 10);
    }, 10);

    return () => {
      console.log("time clean out");
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={duration} />;
}
