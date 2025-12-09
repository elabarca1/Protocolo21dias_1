
import React, { useState } from 'react';

export const Hero: React.FC = () => {
    const WHATSAPP_LINK = "https://chat.whatsapp.com/EjHfSRo1FOQCQSoJxsOBRl";
    
    // Estado para almacenar el ID del video seleccionado aleatoriamente
    const [videoId] = useState(() => {
        const videos = ["k0wyZ9G7mXo", "BRC9P_NQsBI"];
        const randomIndex = Math.floor(Math.random() * videos.length);
        return videos[randomIndex];
    });

    return (
        <section className="relative text-white py-20 md:py-32 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=1974&auto=format&fit=crop" alt="Piedras zen apiladas en una playa al atardecer" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-800/70 via-indigo-900/70 to-purple-800/70 animated-gradient"></div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            
            <div className="relative container mx-auto px-6 text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 tracking-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.6)'}}>
                    Protocolo de 21 Días de Relajación y Sanación
                </h1>
                <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-light" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
                    Armoniza cuerpo, mente y alma. Tu viaje hacia la serenidad comienza hoy.
                </p>
                <div className="mb-12">
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg inline-block"
                    >
                        Únete al Reto Gratuito
                    </a>
                </div>

                <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black">
                    <div className="relative pb-[56.25%] h-0">
                        <iframe 
                            src={`https://www.youtube.com/embed/${videoId}`} 
                            title="Video de Bienvenida"
                            className="absolute top-0 left-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
