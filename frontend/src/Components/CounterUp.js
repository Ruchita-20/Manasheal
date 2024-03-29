import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CounterUp = ({ start, end, duration }) => {
  const [counteron, setCounteron] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounteron(true)} onExit={() => setCounteron(false)}>
      <div>
          {counteron && <CountUp start={start} end={end} duration={duration} />}
      </div>
    </ScrollTrigger>
  );
};

export default CounterUp;