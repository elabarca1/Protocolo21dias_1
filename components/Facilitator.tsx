
import React from 'react';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const Facilitator: React.FC = () => {
    const credentials = [
        "Trainer Certificado en Programación Neuro Lingüística",
        "Coach Ontológico y Coach de Vida",
        "Terapeuta y especialización en (Acupuntura Oriental, Biomagnetismo Energético y cuántico)",
        "Destilador de aceites esenciales naturales",
        "Certificado de Hipnosis Clinica",
        "Gran Maestro Internacional (Cámara Internacional de Conferencistas)",
        "CEO de la comunidad Camino de Bienestar"
    ];

    return (
        <section className="py-16 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        <img 
                            src="https://caminodebienestar.com/imagenes/Perfil%20Endys%20AI%201.png" 
                            alt="Foto del facilitador Endys Labarca" 
                            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover object-top shadow-2xl border-4 border-white"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Conoce a tu Trainer</h2>
                        <div className="mt-4 mb-6">
                            <p className="text-2xl font-semibold text-emerald-700">Endys Alberto Labarca</p>
                            <p className="text-lg italic text-slate-600">Trainer en PNL</p>
                        </div>
                        <p className="text-lg text-slate-600 mb-8">
                            Un experto apasionado por el bienestar integral, dedicado a acompañarte en cada paso de tu transformación.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {credentials.map((credential, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon />
                                    <span className="ml-3 text-slate-700">{credential}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="flex justify-center md:justify-start">
                            <a 
                                href="https://endyslabarcacoach.netlify.app" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-teal-600 hover:-translate-y-1 focus:outline-none ring-offset-2 focus:ring-2 ring-emerald-400 overflow-hidden"
                            >
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                                <span className="relative mr-2">Conocer más sobre Endys</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
