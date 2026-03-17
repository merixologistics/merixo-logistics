import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        freightType: 'Ocean Freight',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({});

    const validateName = (value) => {
        if (!value.trim()) {
            return 'Name is required';
        }
        if (!/^[A-Za-z\s]+$/.test(value)) {
            return 'Name should contain only letters and spaces';
        }
        if (value.trim().length < 2) {
            return 'Name must be at least 2 characters';
        }
        return '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (touchedFields[name]) {
            if (name === 'name') {
                const error = validateName(value);
                setErrors(prev => ({
                    ...prev,
                    [name]: error
                }));
            }
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouchedFields(prev => ({
            ...prev,
            [name]: true
        }));

        if (name === 'name') {
            const error = validateName(formData.name);
            setErrors(prev => ({
                ...prev,
                [name]: error
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newErrors = {};
        newErrors.name = validateName(formData.name);

        setErrors(newErrors);
        setTouchedFields({ name: true, email: true, message: true });

        if (!newErrors.name && formData.email && formData.message) {
            console.log('Form submitted:', formData);
            // Handle form submission
        }
    };

    return (
        <section id="contact" className="py-24 bg-stone-900 text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-coconut rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-spice-red rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Move Your Cargo</h2>
                        <p className="text-stone-400 text-lg mb-10 leading-relaxed">
                            Ready to export to Dubai or anywhere in the world? <br />
                            Get a competitive quote for your Coconut & Spice logistics today.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-stone-800 p-3 rounded-lg text-spice-gold">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Call Us</h4>
                                    <p className="text-stone-400">+91 9344722606</p>
                                    <p className="text-stone-500 text-sm">Mon-Sat</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-stone-800 p-3 rounded-lg text-spice-gold">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Email Us</h4>
                                    <p className="text-stone-400">merixologistics@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-stone-800 p-3 rounded-lg text-spice-gold">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Headquarters</h4>
                                    <p className="text-stone-400">
                                        Pattukkottai,<br />
                                        Thanjavur Dt,614601
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-stone-400 font-medium">Your Name</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`w-full bg-stone-800/50 border rounded-lg px-4 py-3 text-white focus:outline-none transition-all ${
                                                errors.name && touchedFields.name 
                                                    ? '' 
                                                    : formData.name && !errors.name && touchedFields.name
                                                    ? ''
                                                    : 'border-stone-700 focus:border-spice-gold'
                                            }`} 
                                            placeholder="Your Name" 
                                            required
                                        />
                                        {touchedFields.name && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="absolute right-3 top-3"
                                            >
                                                {errors.name ? (
                                                    <AlertCircle size={20} className="text-red-500" />
                                                ) : (
                                                    formData.name && <CheckCircle size={20} className="text-green-500" />
                                                )}
                                            </motion.div>
                                        )}
                                    </div>
                                    {errors.name && touchedFields.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex items-center gap-2 text-red-500 text-sm mt-1"
                                        >
                                            <AlertCircle size={16} />
                                            <span>{errors.name}</span>
                                        </motion.div>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-stone-400 font-medium">Email Address</label>
                                    <input type="email" className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-spice-gold transition-colors" placeholder="company@gmail.com" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-stone-400 font-medium">Freight Type</label>
                                <select className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-spice-gold transition-colors">
                                    <option>Ocean Freight</option>
                                    <option>Air Freight</option>
                                    <option>Warehousing</option>
                                    <option>Supply Chain Consultancy</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-stone-400 font-medium">Message</label>
                                <textarea rows="4" className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-spice-gold transition-colors" placeholder="Tell us about your shipment..." />
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-spice to-spice-red hover:from-spice-red hover:to-spice text-white font-bold py-4 rounded-xl shadow-lg shadow-spice/20 transition-all flex items-center justify-center gap-2 group hover:shadow-lg">
                                Send Message
                                <motion.div
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </motion.div>
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* <div className="border-t border-white/10 mt-20 pt-8 text-center text-stone-500 text-sm">
                    <p>&copy; 2025 developed by <a href='https://vishor-portfolio.netlify.app/' target="_blank">Vishor.</a>All rights reserved</p>
                </div> */}
            </div>
        </section>
    );
};

export default Contact;
