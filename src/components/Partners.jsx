import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, Leaf } from 'lucide-react';

const certifications = [
    { icon: Shield, name: 'ISO 9001:2015', desc: 'Quality Management' },
    { icon: Award, name: 'FSSAI Certified', desc: 'Food Safety' },
    { icon: CheckCircle, name: 'APEDA Registered', desc: 'Export Authority' },
    { icon: Leaf, name: 'Organic Certified', desc: 'Natural Products' },
];

const Partners = () => {
    return (
        <section className="py-12 sm:py-14 md:py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-10 md:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-3 sm:mb-4">
                        Certifications & Trust
                    </h2>
                    <p className="text-stone-600 text-sm sm:text-base">Quality assured by international standards</p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg text-center"
                        >
                            <cert.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-spice mx-auto mb-2 sm:mb-3 md:mb-4" />
                            <h3 className="font-bold text-stone-900 mb-1 text-xs sm:text-sm md:text-base">{cert.name}</h3>
                            <p className="text-stone-600 text-xs sm:text-sm">{cert.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
