
import React, { useState } from 'react';

interface DayItem {
  text: string;
  videoLink?: string;
}

const protocolData: { phase: string; title: string; days: DayItem[] }[] = [
  {
    phase: "FASE 1 (Días 1–7)",
    title: "Desprogramación del Estrés y Calma del Sistema Nervioso",
    days: [
      { text: "Día 1 – Respiración Fundacional", videoLink: "https://youtu.be/uA6XOoWwOpg" },
      { text: "Día 2 – Escaneo Corporal Espiritual", videoLink: "https://youtu.be/McPUDKqUGhc" },
      { text: "Día 3 – Liberación del Peso Interno", videoLink: "https://youtu.be/NSurBC6mdsY" },
      { text: "Día 4 – Anclaje de Paz", videoLink: "https://youtu.be/-8Yp1SQzYP8" },
      { text: "Día 5 – Expansión del Corazón", videoLink: "https://youtu.be/vgIVAsfeIcw" },
      { text: "Día 6 – Baño de Luz en Silencio", videoLink: "https://youtu.be/biHoUEu6vsc" },
      { text: "Día 7 – Ritual de Descanso Profundo", videoLink: "https://youtu.be/_-NtKOAmYFI" },
    ]
  },
  {
    phase: "FASE 2 (Días 8–14)",
    title: "Reprogramación Emocional y Energética",
    days: [
      { text: "Día 8 – Visualización del “Yo en Paz”", videoLink: "https://youtu.be/ZbXR3dV5Occ" },
      { text: "Día 9 – Círculo de Protección", videoLink: "https://youtu.be/ldGMGsHigJ4" },
      { text: "Día 10 – Desprogramación del Estrés Crónico" },
      { text: "Día 11 – Reemplazo Energético" },
      { text: "Día 12 – Respiración del Alma" },
      { text: "Día 13 – Reencuentro con tu Centro" },
      { text: "Día 14 – Ritual de Renacimiento" },
    ]
  },
  {
    phase: "FASE 3 (Días 15–21)",
    title: "Expansión Interior y Consolidación de la Paz",
    days: [
      { text: "Día 15 – Fusión con el Silencio" },
      { text: "Día 16 – Activación del “Yo Superior”" },
      { text: "Día 17 – Conexión con la Naturaleza" },
      { text: "Día 18 – Meditación del Corazón Luminoso" },
      { text: "Día 19 – Gratitud Profunda" },
      { text: "Día 20 – Integración Final" },
      { text: "Día 21 – Ritual de Coronación Espiritual" },
    ]
  }
];

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
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-5 border-t border-slate-200 bg-white">
                    <ul className="space-y-4 text-slate-600">
                        {days.map((day, index) => (
                            <li key={index} className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <div className="flex-1">
                                    {day.videoLink ? (
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-emerald-200 transition-colors">
                                            <span className="font-medium text-slate-800">{day.text}</span>
                                            <a
                                                href={day.videoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg w-full sm:w-auto"
                                            >
                                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                                </svg>
                                                MEDITACIÓN
                                            </a>
                                        </div>
                                    ) : (
                                        <span className="block py-1">{day.text}</span>
                                    )}
                                </div>
                            </li>
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
                <div className="max-w-3xl mx-auto">
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
        </section>
    );
};
