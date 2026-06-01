"use client";

import { useState } from "react";
import BackgroundEffects from "./components/BackgroundEffects";
import TurnTimer from "./components/TurnTimer";
import PlayersTable from "./components/PlayersTable";

const climaticEvents = {
    1: {
        title: "Terremoto",
        description: "Reduce en 1 la producción de trigo (si se farmea más de 1 en esa casilla) para aumentar en 1 la producción de piedra.",
        accent: "#94a3b8"
    },
    2: {
        title: "Tornado",
        description: "Se tiran dos dados y alrededor del número que toque se giran en sentido horario los números.",
        accent: "#60a5fa"
    },
    3: {
        title: "Inundación",
        description: "Los puertos no se pueden usar por toda la ronda y durante la misma ronda cada vez que salga trigo, se farmea 1 más.",
        accent: "#22d3ee"
    },
    4: {
        title: "Incendio",
        description: "Reduce en 1 la producción de madera si se farmea más de 1 en esa casilla (por jugador) pero se farmea 1 más de ladrillo por cada casilla.",
        accent: "#ef4444"
    },
    5: {
        title: "Lobos",
        description: "Reduce en 1 la producción de ovejas si se farmea más de 1 en esa casilla (por jugador) pero se farmea 1 más de madera por cada casilla.",
        accent: "#4ade80"
    },
    6: {
        title: "Calentamiento Global",
        description: "El barro dificulta la minería: reduce en 1 la producción de piedra y ladrillo (si se farmea más de 1). A cambio, los prados florecen: se farmea 1 más de oveja por casilla.",
        accent: "#a7f3d0"
    }
};

const diplomaticEvents = {
    1: {
        title: "Capitalismo",
        description: "El comercio con el banco se vuelve 2:1 para cada jugador en esta ronda.",
        accent: "#facc15"
    },
    2: {
        title: "Socialismo",
        description: "Cada jugador puede agarrar 1 material del banco a su elección en esta ronda.",
        accent: "#ef4444"
    },
    3: {
        title: "Comunismo",
        description: "Por cada cabildo (ciudad) que tenga un jugador, se reduce en 1 la cantidad máxima de cartas que puede tener en mano para que el ladrón no le robe.",
        accent: "#991b1b"
    },
    4: {
        title: "Liberalismo",
        description: "Todos los jugadores pueden comerciar con todos en cualquier momento durante esta ronda.",
        accent: "#60a5fa"
    },
    5: {
        title: "Fascismo",
        description: "El jugador con más puntos (o empatado en primero) no puede tradear esta ronda.",
        accent: "#52525b"
    },
    6: {
        title: "Teocracia",
        description: "Jesús pacifica al ladrón y lo convierte en un trabajador: consigues el doble de recursos de esa casilla durante la ronda.",
        accent: "#fef08a"
    }
};


export default function CatanMod() {
    const [currentClimatic, setCurrentClimatic] = useState<number | null>(null);
    const [currentDiplomatic, setCurrentDiplomatic] = useState<number | null>(null);

    return (
        <div className="container-main">
            <BackgroundEffects currentClimatic={currentClimatic} currentDiplomatic={currentDiplomatic} />
            <TurnTimer />
            <PlayersTable />
            
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center p-4 md:p-8 relative z-10 gap-8">
                <header className="text-center mb-4">
                    <h1>Catán Mod</h1>
                    <p>Selector de Eventos Doble</p>
                </header>

                <div className="w-full flex flex-col md:flex-row gap-8">

                    {/* PANEL IZQUIERDO: CLIMÁTICO */}
                    <div className="flex-1 flex flex-col gap-6">
                        <main
                            className="glass-panel w-full flex-1"
                            style={{
                                borderColor: currentClimatic ? climaticEvents[currentClimatic as keyof typeof climaticEvents].accent : 'rgba(255,255,255,0.1)',
                                boxShadow: currentClimatic ? `0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px ${climaticEvents[currentClimatic as keyof typeof climaticEvents].accent}33` : undefined
                            }}
                        >
                            <div className="flex flex-col gap-4 text-center w-full">
                                <h3 className="text-sm uppercase tracking-widest text-slate-300 font-bold mb-2">🏔️ Evento Climático</h3>
                                <h2 className="event-title" style={{ color: currentClimatic ? climaticEvents[currentClimatic as keyof typeof climaticEvents].accent : '#fff' }}>
                                    {currentClimatic ? `${currentClimatic} - ${climaticEvents[currentClimatic as keyof typeof climaticEvents].title}` : "Selecciona un número"}
                                </h2>
                                <p className="event-description">
                                    {currentClimatic ? climaticEvents[currentClimatic as keyof typeof climaticEvents].description : "El evento de la ronda aparecerá aquí."}
                                </p>
                            </div>
                        </main>

                        <div className="number-buttons">
                            {[1, 2, 3, 4, 5, 6].map(num => (
                                <button
                                    key={num}
                                    className={`btn-num ${currentClimatic === num ? 'active-btn' : ''}`}
                                    style={{ borderColor: currentClimatic === num ? climaticEvents[num as keyof typeof climaticEvents].accent : undefined }}
                                    onClick={() => setCurrentClimatic(num)}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* PANEL DERECHO: DIPLOMÁTICO */}
                    <div className="flex-1 flex flex-col gap-6">
                        <main
                            className="glass-panel w-full flex-1"
                            style={{
                                borderColor: currentDiplomatic ? diplomaticEvents[currentDiplomatic as keyof typeof diplomaticEvents].accent : 'rgba(255,255,255,0.1)',
                                boxShadow: currentDiplomatic ? `0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px ${diplomaticEvents[currentDiplomatic as keyof typeof diplomaticEvents].accent}33` : undefined
                            }}
                        >
                            <div className="flex flex-col gap-4 text-center w-full">
                                <h3 className="text-sm uppercase tracking-widest text-slate-300 font-bold mb-2">📜 Evento Diplomático</h3>
                                <h2 className="event-title" style={{ color: currentDiplomatic ? diplomaticEvents[currentDiplomatic as keyof typeof diplomaticEvents].accent : '#fff' }}>
                                    {currentDiplomatic ? `${currentDiplomatic} - ${diplomaticEvents[currentDiplomatic as keyof typeof diplomaticEvents].title}` : "Selecciona un número"}
                                </h2>
                                <p className="event-description">
                                    {currentDiplomatic ? diplomaticEvents[currentDiplomatic as keyof typeof diplomaticEvents].description : "El evento diplomático aparecerá aquí."}
                                </p>
                            </div>
                        </main>

                        <div className="number-buttons">
                            {Object.keys(diplomaticEvents).map(numStr => {
                                const num = parseInt(numStr);
                                return (
                                    <button
                                        key={num}
                                        className={`btn-num ${currentDiplomatic === num ? 'active-btn' : ''}`}
                                        style={{ borderColor: currentDiplomatic === num ? diplomaticEvents[num as keyof typeof diplomaticEvents].accent : undefined }}
                                        onClick={() => setCurrentDiplomatic(num)}
                                    >
                                        {num}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
