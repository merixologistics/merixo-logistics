import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: 'What products do you export?',
        answer: 'We export a wide range of Indian products including premium Basmati rice, spices (turmeric, cumin, chilli), fresh fruits (bananas, pomegranates), and vegetables (onions, potatoes, drumsticks).',
    },
    {
        question: 'Which countries do you ship to?',
        answer: 'We currently export to 16+ countries including UAE, Singapore, Malaysia, Sri Lanka, Japan, China, USA, UK, Germany, Netherlands, Italy, Canada, Australia, Indonesia, and Thailand.',
    },
    {
        question: 'What are your shipping options?',
        answer: 'We offer both Ocean Freight and Air Freight services. Ocean freight is cost-effective for bulk orders, while air freight is ideal for time-sensitive or perishable goods.',
    },
    {
        question: 'How can I track my shipment?',
        answer: 'Once your order is shipped, you will receive a tracking ID via email. You can use this ID on our Track Order page to see real-time updates on your shipment location.',
    },
    {
        question: 'What are your payment terms?',
        answer: 'We accept various payment methods including bank transfers, letters of credit (LC), and other international payment options. Payment terms are discussed during the quotation process.',
    },
    {
        question: 'Do you handle customs documentation?',
        answer: 'Yes, we provide complete export documentation support including certificates of origin, phytosanitary certificates, commercial invoices, and all required customs paperwork.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <HelpCircle className="w-10 h-10 sm:w-12 sm:h-12 text-spice mx-auto mb-3 sm:mb-4" />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-3 sm:mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base">
                        Find answers to common questions about our services
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="border border-gray-200 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors gap-3"
                            >
                                <span className="font-semibold text-stone-900 text-sm sm:text-base">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-stone-500 transition-transform ${
                                        openIndex === idx ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-stone-600 text-sm sm:text-base">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
