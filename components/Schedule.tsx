
import React from 'react';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const GoogleCalendarIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C22.1 23 23 22.1 23 21V5C23 3.9 22.1 3 20 3ZM20 21H4V8H20V21Z" fill="#4285F4"/>
        <path d="M4 8H20V5H4V8Z" fill="#34A853"/>
        <path d="M17 1H19V3H17V1Z" fill="#FBBC05"/>
        <path d="M7 1H5V3H7V1Z" fill="#FBBC05"/>
        <path d="M10 13H14V17H10V13Z" fill="#EA4335"/>
    </svg>
);


export const Schedule: React.FC = () => {

    const buildGoogleCalendarLink = () => {
        const title = "Protocolo de 21 Días de Relajación y Sanación";
        // NOTE: Hardcoded to the next occurrence of "Lunes, 1 de Diciembre", which is Dec 2, 2024.
        // Start time is 6 AM Lima time (UTC-5), which is 11:00 UTC.
        const startDate = "20241202T110000Z";
        const endDate = "20241202T111500Z";
        const description = `¡Prepárate para tu viaje de transformación! Dedica 15 minutos diarios para encontrar paz, claridad y energía.\n\nÚnete a la comunidad en WhatsApp: https://chat.whatsapp.com/EjHfSRo1FOQCQSoJxsOBRl`;
        // Repeats daily for 21 days.
        const recurrence = "RRULE:FREQ=DAILY;COUNT=21";

        const params = new URLSearchParams({
            action: 'TEMPLATE',
            text: title,
            dates: `${startDate}/${endDate}`,
            details: description,
            recur: recurrence,
            crm: 'AVAILABLE',
        });

        return `https://www.google.com/calendar/render?${params.toString()}`;
    };

    const googleCalendarLink = buildGoogleCalendarLink();

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-slate-50/70 rounded-xl shadow-lg p-8 md:p-12 text-center border border-slate-200">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
                        Fechas y Horarios para tu Transformación
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-10 text-left my-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-emerald-100 text-emerald-700 rounded-full p-4 flex-shrink-0">
                                <CalendarIcon />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-800 mb-2">Inicio y Frecuencia</h3>
                                <p className="text-slate-600 text-lg"><strong>INICIO:</strong> Lunes 1 de Diciembre</p>
                                <p className="text-slate-600 text-lg">Lunes a sábado.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                             <div className="bg-emerald-100 text-emerald-700 rounded-full p-4 flex-shrink-0">
                                <ClockIcon />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-800 mb-2">Horarios por Región</h3>
                                <ul className="text-slate-600 text-lg space-y-1">
                                    <li><strong>6am:</strong> LIMA - Colombia - Ecuador</li>
                                    <li><strong>7am:</strong> Venezuela</li>
                                    <li><strong>8am:</strong> Argentina - Chile</li>
                                    <li><strong>12m:</strong> España</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-200 pt-8 mt-4">
                         <p className="text-xl text-slate-700 mb-4 font-semibold">
                            Solo necesitas <span className="text-emerald-600">15 minutos al día</span> para sentir más paz, más claridad y más energía.
                        </p>
                        <p className="text-lg italic text-slate-600">
                            Si estás listo para relajarte, sanar y crecer…<br/>entonces este protocolo es para ti.
                        </p>
                    </div>

                    <div className="mt-10">
                        <a
                            href={googleCalendarLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 shadow-emerald-500/40 hover:shadow-emerald-500/50"
                        >
                            <GoogleCalendarIcon />
                            <span className="ml-3">Añadir a Google Calendar</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};