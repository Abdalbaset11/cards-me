import React from 'react';

const ContactButton = ({ href, Icon, label, value, bgColor, textColor, hoverBgColor }) => {
    return (
        <a
            href={href}
            className={` ${bgColor} ${textColor} ${hoverBgColor} transform hover:-translate-y-1 flex items-center justify-center gap-4 p-4 py-6 rounded-xl sm:w-full max-w-sm mx-auto text-lg mb-5`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon className="w-9 h-9" />
            <div className="flex flex-col ml-2">
                <span className="text-base text-[#27272A]">{label}</span>
                <span className="font-bold text-sm sm:text-base">{value}</span>
            </div>
        </a>
    );
};

export default ContactButton;

