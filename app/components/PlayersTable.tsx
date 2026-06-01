"use client";
import { useState } from 'react';

interface Player {
    id: string;
    name: string;
    settlements: number;
    cities: number;
}

export default function PlayersTable() {
    const [isOpen, setIsOpen] = useState(false);
    const [players, setPlayers] = useState<Player[]>([]);
    const [newName, setNewName] = useState("");

    const addPlayer = () => {
        if (!newName.trim()) return;
        setPlayers([...players, {
            id: Date.now().toString(),
            name: newName.trim(),
            settlements: 2, // Se empieza con 2 poblados por defecto en Catan
            cities: 0
        }]);
        setNewName("");
    };

    const updatePlayer = (id: string, field: 'settlements' | 'cities', amount: number) => {
        setPlayers(players.map(p => {
            if (p.id === id) {
                const newValue = p[field] + amount;
                if (newValue >= 0) {
                    return { ...p, [field]: newValue };
                }
            }
            return p;
        }));
    };

    const deletePlayer = (id: string) => {
        setPlayers(players.filter(p => p.id !== id));
    };

    return (
        <>
            <button 
                onClick={() => setIsOpen(true)}
                className="fixed top-4 left-4 z-50 glass-panel !min-h-0 px-6 py-3 cursor-pointer hover:bg-white/10 shadow-xl flex items-center gap-3 transition-transform hover:scale-105"
            >
                <span className="text-2xl">👥</span>
                <span className="font-bold text-lg uppercase tracking-wider">Jugadores</span>
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fade-in">
                    <div className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col relative shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/20">
                        
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 transition-colors"
                        >
                            &times;
                        </button>

                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            Tabla de Jugadores
                        </h2>

                        <div className="flex gap-3 mb-8">
                            <input 
                                type="text" 
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addPlayer()}
                                placeholder="Ingresa el nombre del jugador..."
                                className="flex-1 bg-black/40 border border-white/20 rounded-xl px-5 py-3 text-white text-lg outline-none focus:border-blue-400/50 transition-colors"
                            />
                            <button 
                                onClick={addPlayer}
                                className="bg-blue-600/50 hover:bg-blue-500/80 border border-blue-400/30 rounded-xl px-8 py-3 font-bold text-lg transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                            >
                                Agregar
                            </button>
                        </div>

                        <div className="overflow-x-auto w-full rounded-xl bg-black/20 border border-white/10">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/20 text-slate-300 bg-white/5">
                                        <th className="p-4 text-lg">Nombre</th>
                                        <th className="p-4 text-center text-lg">Poblados (1 pt)</th>
                                        <th className="p-4 text-center text-lg">Ciudades (2 pts)</th>
                                        <th className="p-4 text-center text-lg">Puntos</th>
                                        <th className="p-4"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {players.map(player => {
                                        const points = (player.settlements * 1) + (player.cities * 2);
                                        return (
                                            <tr key={player.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                                <td className="p-4 font-bold text-xl">{player.name}</td>
                                                <td className="p-4">
                                                    <div className="flex items-center justify-center gap-4">
                                                        <button onClick={() => updatePlayer(player.id, 'settlements', -1)} className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-red-500/50 font-bold text-xl transition-colors">-</button>
                                                        <span className="w-6 text-center text-2xl font-mono">{player.settlements}</span>
                                                        <button onClick={() => updatePlayer(player.id, 'settlements', 1)} className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-green-500/50 font-bold text-xl transition-colors">+</button>
                                                    </div>
                                                </td>
                                                <td className="p-4">
                                                    <div className="flex items-center justify-center gap-4">
                                                        <button onClick={() => updatePlayer(player.id, 'cities', -1)} className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-red-500/50 font-bold text-xl transition-colors">-</button>
                                                        <span className="w-6 text-center text-2xl font-mono">{player.cities}</span>
                                                        <button onClick={() => updatePlayer(player.id, 'cities', 1)} className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-green-500/50 font-bold text-xl transition-colors">+</button>
                                                    </div>
                                                </td>
                                                <td className="p-4 text-center">
                                                    <div className="inline-flex items-center justify-center bg-amber-500/20 border border-amber-400/50 rounded-full w-14 h-14">
                                                        <span className="text-2xl font-bold text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]">
                                                            {points}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="p-4 text-right">
                                                    <button 
                                                        onClick={() => deletePlayer(player.id)}
                                                        className="text-red-400 hover:text-red-300 w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                                                        title="Eliminar jugador"
                                                    >
                                                        🗑️
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    {players.length === 0 && (
                                        <tr>
                                            <td colSpan={5} className="p-10 text-center text-slate-400 italic text-lg">
                                                No hay jugadores en la partida. Usa el buscador de arriba para inscribirlos.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
