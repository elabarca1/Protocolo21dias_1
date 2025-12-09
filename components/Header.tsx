
import React from 'react';

const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const Header: React.FC = () => {
    return (
        <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <LeafIcon />
                    <h1 className="text-xl font-semibold text-slate-800 tracking-wide">Bienestar y Armonía</h1>
                </div>
            </div>
        </header>
    );
};
