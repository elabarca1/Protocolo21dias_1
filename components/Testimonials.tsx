
import React from 'react';

const testimonialsData = [
    {
        quote: "Este protocolo cambió mi perspectiva. Encontré una calma que no sabía que era posible. Cada día fue un regalo de paz interior.",
        name: "Ana García",
        role: "Participante del Reto"
    },
    {
        quote: "Nunca pensé que podría desconectar del ruido mental tan eficazmente. Las técnicas son sencillas pero increíblemente poderosas. Lo recomiendo al 100%.",
        name: "Carlos Martínez",
        role: "Emprendedor"
    },
    {
        quote: "Como madre de dos, el estrés era mi día a día. Estos 21 días me devolvieron el centro y la paciencia. ¡Una experiencia transformadora!",
        name: "Sofía Hernández",
        role: "Madre y Profesional"
    },
    {
        quote: "La estructura del programa es perfecta. Te lleva de la mano de forma progresiva hacia un estado de serenidad profunda. Me siento renovado.",
        name: "Javier Rodríguez",
        role: "Consultor Creativo"
    }
];


export const Testimonials: React.FC = () => {
    return (
        <section className="py-16 bg-emerald-50 relative">
             <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/id/1018/1920/1080')"}}></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Lo que dicen nuestros participantes</h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
                        Historias reales de transformación y serenidad.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonialsData.map((testimonial, index) => (
                         <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center flex flex-col">
                            <blockquote className="text-base italic text-slate-700 mb-6 flex-grow">
                                "{testimonial.quote}"
                            </blockquote>
                            <footer className="font-bold text-slate-800 text-base mt-auto">
                                {testimonial.name}
                                <div className="text-sm text-slate-500 font-normal">{testimonial.role}</div>
                            </footer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};