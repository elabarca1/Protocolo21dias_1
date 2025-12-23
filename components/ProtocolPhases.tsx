import React, { useState } from 'react';

interface DayItem {
  text: string;
  videoLink?: string;
  audioLink?: string;
  resourceLink?: string;
}

const protocolData: { phase: string; title: string; days: DayItem[] }[] = [
  {
    phase: "FASE 1 (Días 1–7)",
    title: "Desprogramación del Estrés y Calma del Sistema Nervioso",
    days: [
      { 
        text: "Día 1 – Respiración Fundacional", 
        videoLink: "https://youtu.be/uA6XOoWwOpg",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%201%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%201.docx"
      },
      { 
        text: "Día 2 – Escaneo Corporal Espiritual", 
        videoLink: "https://youtu.be/McPUDKqUGhc", 
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%202%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%202.docx"
      },
      { 
        text: "Día 3 – Liberación del Peso Interno", 
        videoLink: "https://youtu.be/NSurBC6mdsY",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%203%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%203.docx"
      },
      { 
        text: "Día 4 – Anclaje de Paz", 
        videoLink: "https://youtu.be/-8Yp1SQzYP8",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%204%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%204.docx"
      },
      { 
        text: "Día 5 – Expansión del Corazón", 
        videoLink: "https://youtu.be/vgIVAsfeIcw",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%205%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%205.docx"
      },
      { 
        text: "Día 6 – Baño de Luz en Silencio", 
        videoLink: "https://youtu.be/biHoUEu6vsc",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%206%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%206.docx"
      },
      { 
        text: "Día 7 – Ritual de Descanso Profundo", 
        videoLink: "https://youtu.be/_-NtKOAmYFI",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%207%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%207.docx"
      },
    ]
  },
  {
    phase: "FASE 2 (Días 8–14)",
    title: "Reprogramación Emocional y Energética",
    days: [
      { 
        text: "Día 8 – Visualización del “Yo en Paz”", 
        videoLink: "https://youtu.be/ZbXR3dV5Occ",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%208%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%208.docx"
      },
      { 
        text: "Día 9 – Círculo de Protección", 
        videoLink: "https://youtu.be/ldGMGsHigJ4",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%209%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%209.docx"
      },
      { 
        text: "Día 10 – Desprogramación del Estrés Crónico",
        videoLink: "https://youtu.be/18n3fbIUbBc",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%2010%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%2010.docx"
      },
      { 
        text: "Día 11 – Sanación del Niño 1",
        videoLink: "https://youtu.be/IqV_6izJwgs",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%2011%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%2011.docx"
      },
      { 
        text: "Día 12 – Sanación del Niño 2",
        videoLink: "https://youtu.be/gRc3ZEeKX9U",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%2012%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%2012.docx"
      },
      { 
        text: "Día 13 – Sanación del Niño 3",
        videoLink: "https://youtu.be/MNOjcIZSf3E",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%2013%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%2013.docx"
      },
      { 
        text: "Día 14 – Ritual de Renacimiento",
        videoLink: "https://youtu.be/N3x5bR6zgRU",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%2014%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%2014.docx"
      },
    ]
  },
  {
    phase: "FASE 3 (Días 15–21)",
    title: "Expansión Interior y Consolidación de la Paz",
    days: [
      { 
        text: "Día 15 – Fusión con el Silencio",
        videoLink: "https://youtu.be/-T3Chf1UqSI",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%2015%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%2015.docx"
      },
      { 
        text: "Día 16 – Activación del “Yo Superior”",
        videoLink: "https://youtu.be/zJUHZWXro1g",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%2016%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%2016.docx"
      },
      { 
        text: "Día 17 – Conexión con la Naturaleza",
        videoLink: "https://youtu.be/9yPhVrMznY0",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%2017%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%2017.docx"
      },
      { 
        text: "Día 18 – Activación de la Intuición",
        videoLink: "https://youtu.be/71OJKnN3vFM",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%2018%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%2018.docx"
      },
      { 
        text: "Día 19 – Soltar Lo Que No Puedo Controlar",
        videoLink: "https://youtu.be/vxhOuBkTOG8",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%2019%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%2019.docx"
      },
      { 
        text: "Día 20 – Gratitud Profunda",
        videoLink: "https://youtu.be/tGNGiPCEEog",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%2020%20Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%2020.docx"
      },
      { text: "Día 21 – Integración Final" },
    ]
  }
];

// Componente individual para manejar el estado del reproductor de audio por día
const DayRow: React.FC<{ day: DayItem }> = ({ day }) => {
    const [showAudioPlayer, setShowAudioPlayer] = useState(false);

    return (
        <li className="flex flex-col border-b border-slate-100 last:border-0 pb-4 last:pb-0">
            <div className="flex items-start mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                
                <div className="flex-1 min-w-0">
                    {(day.videoLink || day.audioLink || day.resourceLink) ? (
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-emerald-200 transition-colors">
                            <span className="font-medium text-slate-800 truncate pr-2">{day.text}</span>
                            <div className="flex flex-nowrap items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
                                {day.videoLink && (
                                    <a
                                        href={day.videoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-3 py-1.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md flex-shrink-0"
                                    >
                                        <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </svg>
                                        VIDEO
                                    </a>
                                )}
                                {day.audioLink && (
                                    <button
                                        onClick={() => setShowAudioPlayer(!showAudioPlayer)}
                                        className="inline-flex items-center justify-center px-3 py-1.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-[10px] font-bold uppercase tracking-wider rounded-full transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md flex-shrink-0 cursor-pointer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {showAudioPlayer ? (
                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            ) : (
                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                            )}
                                        </svg>
                                        {showAudioPlayer ? 'CERRAR' : 'AUDIO'}
                                    </button>
                                )}
                                {day.resourceLink && (
                                    <a
                                        href={day.resourceLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-[10px] font-bold uppercase tracking-wider rounded-full transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md flex-shrink-0"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        RECURSO
                                    </a>
                                )}
                            </div>
                        </div>
                    ) : (
                        <span className="block py-1">{day.text}</span>
                    )}
                </div>
            </div>

            {/* Reproductor de Audio Desplegable */}
            {day.audioLink && showAudioPlayer && (
                <div className="mt-3 pl-8 pr-2 animate-fadeIn w-full">
                    <div className="bg-sky-50 border border-sky-100 rounded-lg p-3 shadow-inner">
                        <p className="text-xs text-sky-700 mb-2 font-semibold text-center uppercase tracking-wide">Reproductor de Meditación</p>
                        <audio 
                            controls 
                            controlsList="nodownload" 
                            className="w-full h-10 outline-none"
                            onContextMenu={(e) => e.preventDefault()}
                        >
                            <source src={day.audioLink} type="audio/mpeg" />
                            Tu navegador no soporta el elemento de audio.
                        </audio>
                    </div>
                </div>
            )}
        </li>
    );
};

interface AccordionItemProps {
    phase: string;
    title: string;
    days: DayItem[];
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ phase, title, days, isOpen, onClick }) => {
    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden mb-4 bg-white shadow-sm">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 transition duration-300"
            >
                <div>
                    <span className="text-emerald-600 block text-sm font-bold uppercase tracking-wide">{phase}</span>
                    <span className="text-lg">{title}</span>
                </div>
                <span className={`transform transition-transform duration-300 text-emerald-500 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-5 border-t border-slate-200 bg-white">
                    <ul className="space-y-4 text-slate-600">
                        {days.map((day, index) => (
                            <DayRow key={index} day={day} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export const ProtocolPhases: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">El Camino de 21 Días hacia tu Paz Interior</h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">
                        Un viaje estructurado en tres fases para desprogramar el estrés, reprogramar tu energía y expandir tu conciencia.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    {protocolData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            {...item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: `
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            ` }} />
        </section>
    );
};
