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
      { 
        text: "Día 21 – Integración Final",
        videoLink: "https://youtu.be/OMTtNtVytZA",
        audioLink: "https://caminodebienestar.com/material_21dias/Dia%2020%21Protocolo%20de%2021.mp3",
        resourceLink: "https://caminodebienestar.com/material_21dias/recursos%20dia%2021.docx"
      },
    ]
  }
];

const DayRow: React.FC<{ day: DayItem }> = ({ day }) => {
    const [showAudioPlayer, setShowAudioPlayer] = useState(false);

    return (
        <li className="flex flex-col border-b border-slate-100 last:border-0 pb-4 last:pb-0">
            <div className="flex flex-col items-center">
                <div className="w-full">
                    {(day.videoLink || day.audioLink || day.resourceLink) ? (
                        <div className="flex flex-col items-center text-center gap-4 p-4 md:p-5 bg-slate-50/50 rounded-[1.5rem] border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300 group shadow-sm">
                            <span className="font-bold text-slate-800 text-base md:text-lg leading-tight group-hover:text-emerald-800 transition-colors">
                                {day.text}
                            </span>
                            
                            <div className="flex flex-wrap justify-center items-center gap-3 w-full">
                                {day.videoLink && (
                                    <a
                                        href={day.videoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center min-w-[90px] px-4 py-2 bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white text-[9px] font-black uppercase tracking-[0.12em] rounded-xl transition-all duration-300 transform active:scale-95 shadow-md"
                                    >
                                        <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </svg>
                                        VIDEO
                                    </a>
                                )}
                                {day.audioLink && (
                                    <button
                                        onClick={() => setShowAudioPlayer(!showAudioPlayer)}
                                        className={`inline-flex items-center justify-center min-w-[90px] px-4 py-2 transition-all duration-300 transform active:scale-95 shadow-md rounded-xl text-[9px] font-black uppercase tracking-[0.12em] text-white ${showAudioPlayer ? 'bg-slate-700 shadow-inner' : 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700'}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {showAudioPlayer ? (
                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                            ) : (
                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
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
                                        className="inline-flex items-center justify-center min-w-[90px] px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-[9px] font-black uppercase tracking-[0.12em] rounded-xl transition-all duration-300 transform active:scale-95 shadow-md"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        RECURSO
                                    </a>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center text-center p-4 bg-emerald-50/30 rounded-[1.5rem] border border-emerald-100">
                             <span className="font-bold text-slate-700 text-base">
                                {day.text}
                            </span>
                            <span className="text-[9px] text-emerald-600 font-black mt-1.5 uppercase tracking-[0.2em]">Contenido Próximamente</span>
                        </div>
                    )}
                </div>
            </div>

            {day.audioLink && showAudioPlayer && (
                <div className="mt-3 w-full max-w-xl mx-auto animate-fadeIn">
                    <div className="bg-sky-50 border border-sky-100 rounded-[1rem] p-3 shadow-inner">
                        <div className="flex items-center justify-center mb-2">
                           <p className="text-[9px] text-sky-700 font-black mx-3 uppercase tracking-[0.2em]">Meditación Activa</p>
                        </div>
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
        <div className="border border-slate-200 rounded-[1.25rem] overflow-hidden mb-5 bg-white shadow-sm hover:shadow-lg transition-all duration-700">
            <button
                onClick={onClick}
                className={`w-full flex justify-between items-center p-5 md:p-6 text-left transition-all duration-700 ${isOpen ? 'bg-emerald-600 text-white' : 'bg-white hover:bg-slate-50'}`}
            >
                <div className="pr-4 flex-1 min-w-0">
                    <span className={`block text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-1 ${isOpen ? 'text-emerald-100' : 'text-emerald-600'}`}>
                        {phase}
                    </span>
                    <span className={`block text-sm md:text-base lg:text-lg font-bold leading-tight whitespace-nowrap overflow-hidden text-ellipsis ${isOpen ? 'text-white' : 'text-slate-800'}`}>
                        {title}
                    </span>
                </div>
                <span className={`flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-[0.6rem] shadow-md transform transition-all duration-700 ${isOpen ? 'bg-white/20 rotate-180 text-white' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div className={`transition-all duration-1000 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="p-5 md:p-7 bg-white border-t border-slate-100">
                    <ul className="space-y-4">
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
        <section className="py-16 bg-gradient-to-b from-transparent via-emerald-50/5 to-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">Ruta del Renacer</h2>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-1 w-8 bg-emerald-500 rounded-full"></div>
                        <div className="h-1 w-1 bg-emerald-400 rounded-full"></div>
                        <div className="h-1 w-1 bg-emerald-300 rounded-full"></div>
                    </div>
                    <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        Un sistema progresivo diseñado para transformar profundamente tu bienestar.
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
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            ` }} />
        </section>
    );
};
