
import React, { useState, useEffect } from 'react';

const images = [
    {
        url: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=1920&auto=format&fit=crop",
        alt: "Meditación frente al mar"
    },
    {
        url: "https://images.unsplash.com/photo-1499209974431-2761e25230d0?q=80&w=1920&auto=format&fit=crop",
        alt: "Relajación y luz natural en la naturaleza"
    },
    {
        url: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1920&auto=format&fit=crop",
        alt: "Naturaleza serena"
    },
    {
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
        alt: "Yoga al atardecer"
    }
];

export const ImageCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 6000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[400px] md:h-[600px] bg-slate-900 overflow-hidden group">
            {/* Imágenes con transición de opacidad y efecto Ken Burns (Zoom) */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img 
                        src={img.url} 
                        alt={img.alt} 
                        className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${index === currentIndex ? 'scale-110' : 'scale-100'}`} 
                    />
                    {/* Capa oscura sutil para unificar tonos */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
            ))}

            {/* Flecha Izquierda */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                    onClick={prevSlide}
                    className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all transform hover:scale-110"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            {/* Flecha Derecha */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                    onClick={nextSlide}
                    className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all transform hover:scale-110"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Indicadores (Puntos) */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                {images.map((_, slideIndex) => (
                    <button
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`transition-all duration-300 rounded-full shadow-md ${currentIndex === slideIndex ? 'w-4 h-4 bg-white' : 'w-3 h-3 bg-white/50 hover:bg-white/80'}`}
                        aria-label={`Ir a la imagen ${slideIndex + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};
