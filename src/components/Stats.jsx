import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Package, Users, Award } from 'lucide-react';

const Stats = () => {
    const stats = [
        { icon: Globe, value: 16, suffix: '+', label: 'Countries Served', color: 'text-blue-500' },
        { icon: Package, value: 500, suffix: '+', label: 'Products Exported', color: 'text-green-500' },
        { icon: Users, value: 1200, suffix: '+', label: 'Happy Clients', color: 'text-orange-500' },
        { icon: Award, value: 10, suffix: '+', label: 'Years Experience', color: 'text-purple-500' },
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {stats.map((stat, idx) => (
                        <CounterCard key={idx} stat={stat} delay={idx * 0.2} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const CounterCard = ({ stat, delay }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const increment = stat.value / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= stat.value) {
                    setCount(stat.value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, stat.value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className="text-center p-4 sm:p-6"
        >
            <stat.icon className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4 ${stat.color}`} />
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                {count}{stat.suffix}
            </div>
            <div className="text-gray-400 text-xs sm:text-sm md:text-base">{stat.label}</div>
        </motion.div>
    );
};

export default Stats;
