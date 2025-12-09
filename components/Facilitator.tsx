
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
                            src="https://caminodebienestar.com/imagenes/EndysLabarca2.png" 
                            alt="Foto del facilitador Endys Labarca" 
                            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-white"
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
                        <ul className="space-y-4">
                            {credentials.map((credential, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon />
                                    <span className="ml-3 text-slate-700">{credential}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
