
import React from 'react';

export const CallToAction: React.FC = () => {
    const WHATSAPP_LINK = "https://chat.whatsapp.com/EjHfSRo1FOQCQSoJxsOBRl";
    
    return (
        <section className="bg-emerald-700 text-white">
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para transformar tu vida?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
                    El cambio está a un clic de distancia. Únete a una comunidad de bienestar y comienza tu viaje hoy mismo.
                </p>
                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-emerald-700 font-bold py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-emerald-50 shadow-lg"
                >
                    ¡Sí, Quiero Unirme Ahora!
                </a>
            </div>
        </section>
    );
};
