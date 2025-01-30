import { useState, useEffect } from "react";

const Contador = () => {

    const targetDate = new Date("2025-02-10T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft(targetDate - Date.now());
      }, 1000);
  
      return () => clearInterval(interval);
    }, [targetDate]);
  
    const formatTime = (ms) => {
      const seconds = Math.floor((ms / 1000) % 60);
      const minutes = Math.floor((ms / 1000 / 60) % 60);
      const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
      const days = Math.floor(ms / (1000 * 60 * 60 * 24));
      return { days, hours, minutes, seconds };
    };
  
    const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="flex flex-col items-center justify-center text-white text-center p-4">
      <div className="flex space-x-4 text-4xl md:text-6xl font-bold mt-6">
        <div className="text-center">
          <span>{days.toString().padStart(2, '0')}</span>
          <div className="text-sm md:text-base text-gray-400 uppercase">Days</div>
        </div>
        <span>:</span>
        <div className="text-center">
          <span>{hours.toString().padStart(2, '0')}</span>
          <div className="text-sm md:text-base text-gray-400 uppercase">Hours</div>
        </div>
        <span>:</span>
        <div className="text-center">
          <span>{minutes.toString().padStart(2, '0')}</span>
          <div className="text-sm md:text-base text-gray-400 uppercase">Minutes</div>
        </div>
        <span>:</span>
        <div className="text-center">
          <span>{seconds.toString().padStart(2, '0')}</span>
          <div className="text-sm md:text-base text-gray-400 uppercase">Seconds</div>
        </div>
      </div>
    </div>
  );
};


export default Contador
