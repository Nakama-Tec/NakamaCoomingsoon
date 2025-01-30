import { useState, useEffect } from 'react';

const Contador = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('February 10, 2025 00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft(null);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center mt-20 text-white">
            <div className="text-2xl">
                {timeLeft ? (
                    <div className="flex space-x-20">
                        <div className="flex flex-col items-center">
                            <span className="font-mono text-6xl bg-gray-800 p-4 rounded-lg">{timeLeft.days}</span>
                            <span className="mt-2">Días</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-mono text-6xl bg-gray-800 p-4 rounded-lg">{timeLeft.hours}</span>
                            <span className="mt-2">Horas</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-mono text-6xl bg-gray-800 p-4 rounded-lg">{timeLeft.minutes}</span>
                            <span className="mt-2">Minutos</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-mono text-6xl bg-gray-800 p-4 rounded-lg">{timeLeft.seconds}</span>
                            <span className="mt-2">Segundos</span>
                        </div>
                    </div>
                ) : (
                    <span className="text-4xl">¡La espera ha finalizado!</span>
                )}
            </div>
        </div>
    );
};

export default Contador;