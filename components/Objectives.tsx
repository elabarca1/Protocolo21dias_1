
import React from 'react';

interface ObjectiveCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatherIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const BrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l1.293-1.293a1 1 0 011.414 0l.293.293a1 1 0 010 1.414L9 10m0 9v-3m0 0h3m-3 0a9 9 0 100-18 9 9 0 000 18z" /></svg>
);
const BodyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
);
const AnchorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
);


const ObjectiveCard: React.FC<ObjectiveCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
        <div className="bg-emerald-100 text-emerald-700 rounded-full p-4 mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </div>
);

export const Objectives: React.FC = () => {
    const objectives = [
        {
            icon: <FeatherIcon />,
            title: "Reduce la Tensión",
            description: "Libera el estrés y la tensión acumulada en tu cuerpo y mente."
        },
        {
            icon: <BrainIcon />,
            title: "Calma tu Mente",
            description: "Disminuye el ruido mental y encuentra un estado de claridad y enfoque."
        },
        {
            icon: <BodyIcon />,
            title: "Conecta con tu Cuerpo",
            description: "Reestablece la conexión vital entre tu mente, cuerpo y espíritu."
        },
        {
            icon: <AnchorIcon />,
            title: "Ancla tu Serenidad",
            description: "Crea un anclaje interno de paz que podrás activar en cualquier momento."
        }
    ];

    return (
        <section className="py-16 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">¿Qué Lograrás con este Protocolo?</h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
                        Descubre los pilares de transformación que te esperan en este viaje de 21 días.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {objectives.map((obj, index) => (
                        <ObjectiveCard key={index} {...obj} />
                    ))}
                </div>
            </div>
        </section>
    );
};
