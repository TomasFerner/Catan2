"use client";
import { useState, useEffect } from 'react';

export default function TurnTimer() {
    const [timeLeft, setTimeLeft] = useState(75); // 1:15 = 75 seconds

    useEffect(() => {
        if (timeLeft <= 0) return;
        
        const intervalId = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const resetTimer = () => {
        setTimeLeft(75);
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const isWarning = timeLeft > 0 && timeLeft <= 30;
    const isFinished = timeLeft === 0;

    return (
        <button 
            onClick={resetTimer}
            className={`fixed top-4 right-4 z-50 glass-panel !min-h-0 px-6 py-3 cursor-pointer select-none transition-all duration-300 shadow-xl
            ${isWarning ? 'border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]' : ''}
            ${isFinished ? 'border-red-600 bg-red-900/40 shadow-[0_0_30px_rgba(220,38,38,0.8)]' : 'hover:bg-white/10'}`}
        >
            <div className="flex flex-col items-center">
                <span className="text-xs uppercase tracking-widest text-slate-300 font-bold mb-1">Turno</span>
                <span className={`text-4xl font-bold font-mono ${isWarning ? 'text-red-400 animate-pulse' : ''} ${isFinished ? 'text-red-500' : 'text-white'}`}>
                    {formatTime(timeLeft)}
                </span>
                {isFinished && <span className="text-[10px] mt-1 text-red-300 uppercase font-bold tracking-wider">Tiempo Agotado</span>}
            </div>
        </button>
    );
}
