"use client";

import { useEffect, useState } from 'react';
import './effects.css';

const climaticBackgrounds = {
    default: "/catan.png", 
    1: "/terremoto.png", 
    2: "/tornado.png", 
    3: "/inundacion.png", 
    4: "/volcan.png", 
    5: "/lobos.png", 
    6: "/calentamiento.png" 
};

const diplomaticBackgrounds = {
    default: "/catan.png",
    1: "/capitalismo.png",
    2: "/socialismo.png",
    3: "/comunismo.png",
    4: "/liberalismo.png",
    5: "/facismo.png",
    6: "/teocracy.png"
};


// Generador de partículas para diferentes efectos
const Particles = ({ count, type }: { count: number, type: string }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className={`particles-container ${type}`}>
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="particle" style={{
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 3 + 1}s`,
                    animationDelay: `${Math.random() * 2}s`,
                    opacity: Math.random() * 0.8 + 0.2
                }} />
            ))}
        </div>
    );
}

export default function BackgroundEffects({ currentClimatic, currentDiplomatic }: { currentClimatic: number | null, currentDiplomatic: number | null }) {
    const climaticBgUrl = currentClimatic ? climaticBackgrounds[currentClimatic as keyof typeof climaticBackgrounds] : climaticBackgrounds.default;
    const diplomaticBgUrl = currentDiplomatic ? diplomaticBackgrounds[currentDiplomatic as keyof typeof diplomaticBackgrounds] : diplomaticBackgrounds.default;

    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-black flex flex-col md:flex-row">
            
            {/* MITAD CLIMÁTICA (Izquierda) */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-black/50 shadow-[inset_-30px_0_50px_rgba(0,0,0,0.8)]">
                <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                    style={{ backgroundImage: `url(${climaticBgUrl})`, opacity: 0.8, transform: 'scale(1.05)' }}
                />
                <div className={`absolute inset-0 w-full h-full transition-colors duration-1000 mix-blend-multiply bg-overlay-${currentClimatic || 'default'}`} style={{ opacity: 0.7 }} />
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.6)_100%)]" />

                {!currentClimatic && <Particles count={20} type="stars" />}
                {currentClimatic === 1 && <div className="effect-smoke" />}
                {currentClimatic === 3 && <Particles count={50} type="rain" />}
                {currentClimatic === 4 && <Particles count={30} type="embers" />}
                {currentClimatic === 5 && <div className="effect-fog" />}
            </div>

            {/* MITAD DIPLOMÁTICA (Derecha) */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden shadow-[inset_30px_0_50px_rgba(0,0,0,0.8)]">
                <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                    style={{ backgroundImage: `url(${diplomaticBgUrl})`, opacity: 0.8, transform: 'scale(1.05)' }}
                />
                <div className={`absolute inset-0 w-full h-full transition-colors duration-1000 mix-blend-multiply bg-overlay-${currentDiplomatic || 'default'}`} style={{ opacity: 0.7 }} />
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.6)_100%)]" />
                
                {!currentDiplomatic && <Particles count={20} type="stars" />}
            </div>

        </div>
    );
}
