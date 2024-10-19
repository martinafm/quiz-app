import { useEffect, useState } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    //this cleanup function will automatically be executed by React before it runs this effect function again, or when this component is unmounted from the DOM.

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress id="question-time" max={timeout} value={remainingTime}></progress>
  );
}
