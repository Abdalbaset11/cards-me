'use client';

import React from 'react';
import ServiceCards from './ServiceCards';
import { MdSmartphone, MdWeb, MdCloud } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion"; // استيراد motion
import 'swiper/css';
import 'swiper/css/pagination';

function ServicesSection() {
    const cardsData = [
        {
            icon: <MdSmartphone className="text-cyan-600 text-2xl" />,
            title: 'تطوير الأنظمة والتطبيقات',
            description: 'نوفر أنظمة سحابية تشمل الحسابات والمخازن والموارد البشرية وغيرها.',
        },
        {
            icon: <MdWeb className="text-cyan-600 text-2xl" />,
            title: 'تصميم المواقع الإلكترونية',
            description: 'نقوم بتصميم مواقع احترافية تلبي احتياجات عملائنا.',
        },
        {
            icon: <MdCloud className="text-cyan-600 text-2xl" />,
            title: 'الحلول السحابية',
            description: 'حلول سحابية متكاملة لرفع كفاءة عملك وتقليل التكاليف.',
        },
    ];

    return (
        <motion.div
            className="container mx-auto px-4 py-10 bg-[#EDFCFE] md:mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .3, duration: .8 }}
        >
            {/* عرض الشبكة على الشاشات الكبيرة */}
            <div className="hidden sm:block">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-fit m-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.2, }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    {cardsData.map((card, index) => (
                        <motion.div
                            key={index}
                            transition={{ duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <ServiceCards
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div >

            {/* عرض الشرائح للشاشات الصغيرة */}
            < div className="sm:hidden m-auto sm:w-[50%] relative" >
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    className="w-full mx-auto h-72"
                >
                    {cardsData.map((card, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <ServiceCards
                                    icon={card.icon}
                                    title={card.title}
                                    description={card.description}
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ div>
        </motion.div >
    );
}

export default ServicesSection;
