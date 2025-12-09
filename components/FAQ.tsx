
import React, { useState } from 'react';

const faqData = [
  {
    question: "¿Necesito experiencia previa en meditación?",
    answer: "No, para nada. Este protocolo está diseñado tanto para principiantes como para personas con experiencia. Te guiaremos paso a paso en cada ejercicio para que te sientas cómodo y seguro."
  },
  {
    question: "¿Cuánto tiempo debo dedicar cada día?",
    answer: "Solo necesitas 15 minutos al día. Es un pequeño compromiso de tiempo que te traerá un gran impacto en tu bienestar general, ayudándote a construir un hábito sostenible."
  },
  {
    question: "¿Qué pasa si me pierdo un día?",
    answer: "¡No te preocupes! Aunque la constancia es clave para ver los mejores resultados, la vida pasa. Simplemente retoma el protocolo donde lo dejaste. Lo más importante es no abandonar tu camino hacia la paz interior."
  },
  {
    question: "¿El protocolo es realmente gratuito?",
    answer: "Sí, el acceso a los 21 días de prácticas guiadas y la participación en el grupo de WhatsApp de la comunidad son completamente gratuitos. Nuestro principal objetivo es compartir herramientas de bienestar con tantas personas como sea posible."
  }
];

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
    index: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick, index }) => {
    const questionId = `faq-question-${index}`;
    const answerId = `faq-answer-${index}`;

    return (
        <div className="border-b border-slate-200">
            <h3 className="m-0 font-normal">
                <button
                    onClick={onClick}
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="w-full flex justify-between items-center py-5 px-2 text-left font-semibold text-slate-800 hover:text-emerald-600 transition"
                >
                    <span className="text-lg">{question}</span>
                    <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>
            </h3>
            <div
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pb-5 px-2 text-slate-600">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Preguntas Frecuentes</h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
                        Resolvemos tus dudas para que comiences tu viaje con total confianza.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-md">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            {...item}
                            index={index}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
