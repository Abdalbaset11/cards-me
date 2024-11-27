import React from 'react';

function ServiceCards({ icon, title, description }) {
    const whatsappMessage = `مرحبًا، أرغب في معرفة المزيد حول الخدمة: ${title}`;

    return (
        <div className="rounded-2xl relative shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 text-right max-w-sm h-64 m-auto">
            {/* الأيقونة */}
            <div className="flex justify-center items-center w-12 h-12 mb-4 bg-cyan-100 rounded-full">
                {icon}
            </div>

            {/* العنوان */}
            <h2 className="text-xl font-bold text-gray-800 mb-2">
                {title}
            </h2>

            {/* الوصف */}
            <p className="text-gray-600 leading-relaxed mb-8">
                {description}
            </p>

            {/* زر واتساب */}
            <a
                href={`https://wa.me/96877573609?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block absolute bottom-4  bg-cyan-100 text-[#118AB2] text-center font-semibold py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors duration-200"
            >
                طلب الخدمة
            </a>
        </div>
    );
}

export default ServiceCards;
