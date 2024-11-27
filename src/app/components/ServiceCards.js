import React from 'react';

function ServiceCards({ icon, title, description }) {
    return (
        <div className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white p-6 text-right max-w-sm h-52 m-auto">
            <div className="flex justify-center items-center w-12 h-12 mb-4 bg-cyan-100 rounded-full">
                {icon}
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

export default ServiceCards;
