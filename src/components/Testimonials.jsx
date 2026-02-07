import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Ahmed Al-Rashid',
        company: 'Dubai Spice Trading Co.',
        country: 'UAE',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 5,
        text: 'Merixo has been our trusted partner for over 3 years. Their quality spices and timely delivery have helped us grow our business significantly.',
    },
    {
        name: 'Yuki Tanaka',
        company: 'Srilanka Fresh Imports',
        country: 'Srilanka',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 5,
        text: 'The freshness of their produce is unmatched. We receive our shipments in perfect condition every time. Highly recommended!',
    },
    {
        name: 'Michael Chen',
        company: 'Singapore Food Hub',
        country: 'Singapore',
        image: 'https://randomuser.me/api/portraits/men/52.jpg',
        rating: 5,
        text: 'Professional service, competitive pricing, and excellent communication. Merixo makes international trade easy.',
    },
    {
        name: 'Priya Sharma',
        company: 'Malaysian Grocers Ltd.',
        country: 'Malaysia',
        image: 'https://randomuser.me/api/portraits/women/28.jpg',
        rating: 5,
        text: 'From documentation to delivery, everything is handled professionally. Best export partner we have worked with.',
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-3 sm:mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base">
                        Trusted by businesses across the globe
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 md:p-12"
                        >
                            <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-spice-gold mb-4 sm:mb-6" />
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-700 mb-6 sm:mb-8 leading-relaxed">
                                "{testimonials[current].text}"
                            </p>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonials[current].image}
                                        alt={testimonials[current].name}
                                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-bold text-stone-900 text-sm sm:text-base">{testimonials[current].name}</h4>
                                        <p className="text-stone-600 text-xs sm:text-sm">{testimonials[current].company}</p>
                                        <p className="text-spice-gold text-xs sm:text-sm">{testimonials[current].country}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 sm:ml-auto">
                                    {[...Array(testimonials[current].rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 transition-colors z-10"
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-stone-700" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 transition-colors z-10"
                    >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-stone-700" />
                    </button>

                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    idx === current ? 'bg-spice' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
