'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ContactButton from "./ContactButton";
import { RiWhatsappLine, RiMessengerLine, RiTelegramLine } from "react-icons/ri";

const ContactSection = () => {
  const buttonsData = [
    {
      href: "https://wa.me/96877573609",
      Icon: RiWhatsappLine,
      label: "راسلنا على واتساب",
      value: "96877573609+",
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-700",
      hoverBgColor: "hover:bg-emerald-200",
    },
    {
      href: "https://m.me/easylab.online",
      Icon: RiMessengerLine,
      label: "راسلنا على ماسنجر",
      value: "@easylab.online",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      hoverBgColor: "hover:bg-blue-200",
    },
    {
      href: "https://t.me/96877573609",
      Icon: RiTelegramLine,
      label: "راسلنا على تيليجرام",
      value: "+96877573609",
      bgColor: "bg-sky-100",
      textColor: "text-sky-700",
      hoverBgColor: "hover:bg-sky-200",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto px-4 py-8">
      {buttonsData.map((button, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <ContactButton
            href={button.href}
            Icon={button.Icon}
            label={button.label}
            value={button.value}
            bgColor={button.bgColor}
            textColor={button.textColor}
            hoverBgColor={button.hoverBgColor}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ContactSection;
