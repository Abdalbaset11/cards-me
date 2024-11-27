'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="flex items-center py-16 bg-gradient-to-b">
            <div className="container px-4 text-center">
                {/* الشعار */}
                <motion.div
                    className="w-24 h-24 mx-auto mb-8 bg-cyan-100 rounded-3xl flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                >
                    <Image src="/logo.png" width={64} height={64} alt="Easy Lab Technology" />
                </motion.div>

                {/* العنوان الرئيسي */}
                <motion.h1
                    className="text-3xl md:text-5xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: 0.1 }}
                >
                    Easylab technology
                </motion.h1>

                {/* وصف الشركة */}
                <motion.p
                    className="text-lg md:text-lg font-normal md:leading-8 text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: 0.3 }}
                >
                    شركة إيزي لاب تعمل في مجال تقنية المعلومات وتقديم خدمات تصميم المواقع وتطوير الأنظمة السحابية وتطبيقات الجوال
                </motion.p>
            </div>
        </section>
    );
}
