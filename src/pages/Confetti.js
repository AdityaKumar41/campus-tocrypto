import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

const Confetti = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [showConfetti, setShowConfetti] = useState(true);
  const [opacity, setOpacity] = useState(1);

  const detectSize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 10000); // Hides confetti after 6 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(prevOpacity => prevOpacity - 0.1); // Reduce opacity gradually
    }, 2000); // Interval duration to gradually decrease opacity

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {showConfetti && (
        <ReactConfetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          tweenDuration={1000}
          numberOfPieces={100} // You can adjust the number of confetti pieces here
          opacity={opacity}
        />
      )}
    </div>
  );
}

export default Confetti;
