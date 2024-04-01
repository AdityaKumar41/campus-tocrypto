import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

const Confetti = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [showConfetti, setShowConfetti] = useState(false);
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
    }, 10000); // Hides confetti after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(prevOpacity => prevOpacity - 0.1);
    }, 1000); // Interval duration to gradually decrease opacity

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const confettiShown = localStorage.getItem('confettiShown');
    if (!confettiShown) {
      setShowConfetti(true);
      localStorage.setItem('confettiShown', 'true'); // Change 'false' to 'true'
    }
  }, []); // Empty dependency array to run only once when component mounts
  
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999, pointerEvents: 'none' }}>
      {showConfetti && (
        <ReactConfetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          tweenDuration={1000}
          numberOfPieces={100} // You can adjust the number of confetti pieces here
          opacity={opacity}
          zIndex={999} // Set a high zIndex value here
        />
      )}
    </div>
  );
}

export default Confetti;
