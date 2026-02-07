import React from 'react';
import emailjs from "emailjs-com";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Package, CheckCircle, XCircle } from 'lucide-react';

const Quote = () => {

     const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    cargoType: "",
    destination: ""
  });

  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ ...alert, show: false }), 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Send first email (to you)
    emailjs.send(
      "service_kio9h3e", // your service ID
      "template_8lskf0u",  // template 1 (to you)
      form,
      "sWVHIF0FZfSbM7iWM"
    )
    .then(() => {
      // After first email succeeds, send auto-reply
      return emailjs.send(
        "service_kio9h3e",
        "template_6hou5kj",     // template 2 (auto reply)
        form,
        "sWVHIF0FZfSbM7iWM"
      );
    })
    .then(() => {
      showAlert('success', 'Quote request sent successfully! We will contact you soon.');
      setForm({
        name: "",
        email: "",
        message: "",
        cargoType: "",
        destination: ""
      });
    })
    .catch((err) => {
      console.log(err);
      showAlert('error', 'Failed to send request. Please try again later.');
    });
}




//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const data = Object.fromEntries(formData.entries());
        
//         const subject = `New Quote Request: ${data.cargoType}`;
//         const body = `Name: ${data.fullName}
// Email: ${data.email}
// Cargo Type: ${data.cargoType}
// Destination Port: ${data.destination}
// Additional Details: ${data.details}`;

//         window.location.href = `mailto:exports@globalexport.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//     };

    return (
        <div className="pt-24 min-h-screen bg-sand pb-20 relative">
            {/* Alert Notification */}
            <AnimatePresence>
                {alert.show && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: -50, x: "-50%" }}
                        className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 min-w-[320px] ${
                            alert.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                        }`}
                    >
                        {alert.type === 'success' ? (
                            <CheckCircle className="w-6 h-6 flex-shrink-0" />
                        ) : (
                            <XCircle className="w-6 h-6 flex-shrink-0" />
                        )}
                        <p className="font-medium">{alert.message}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Start Shipping</h1>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        Tell us about your cargo and destination. We will provide a competitive quote within 24 hours.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Contact Info Side */}
                    <div className="bg-stone-900 text-white p-10 md:w-1/3 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-spice-gold">Fast Track</h3>
                            <p className="text-stone-300 mb-8">Need immediate assistance? Call our export desk directly.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-spice-gold">
                                        <Package size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-400 uppercase">Export License</p>
                                        <p className="font-medium">IEC: </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-spice-gold">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-400 uppercase">Headquarters</p>
                                        <p className="font-medium">TamilNadu, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <p className="text-sm text-stone-500">Trusted Indian Export Partner &copy; 2026</p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="p-10 md:w-2/3">
                        <form onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2" >Full Name</label>
                                    <input 
                                        name="name" 
                                        value={form.name} 
                                        onChange={handleChange} 
                                        required 
                                        type="text" 
                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-spice outline-none focus:ring-2 focus:ring-spice/20 transition-all" 
                                        placeholder="SreeHari" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                                    <input 
                                        name="email" 
                                        value={form.email} 
                                        required 
                                        type="email"  
                                        onChange={handleChange} 
                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-spice outline-none focus:ring-2 focus:ring-spice/20 transition-all" 
                                        placeholder="sreehari@gmail.com" 
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2">Cargo Type</label>
                                    <select 
                                        name="cargoType" 
                                        value={form.cargoType} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-spice outline-none focus:ring-2 focus:ring-spice/20 transition-all"
                                    >
                                        <option>AirWays Type</option>
                                        <option>OceanWays Type</option>
                                        {/* <option>Mixed Container</option>
                                        <option>Other</option> */}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2">Destination Port</label>
                                    <input 
                                        name="destination" 
                                        value={form.destination} 
                                        onChange={handleChange} 
                                        required 
                                        type="text" 
                                        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-spice outline-none focus:ring-2 focus:ring-spice/20 transition-all" 
                                        placeholder="e.g., Jebel Ali, Dubai" 
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">Additional Details</label>
                                <textarea 
                                    name="message" 
                                    value={form.message} 
                                    onChange={handleChange} 
                                    rows="4" 
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-spice outline-none focus:ring-2 focus:ring-spice/20 transition-all" 
                                    placeholder="Quantity, special handling requirements, etc."
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-spice hover:bg-spice-red text-white py-4 rounded-lg font-bold shadow-lg shadow-spice/20 flex items-center justify-center gap-2 transition-colors"
                            >
                                Request Quote
                                <Send size={18} />
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;
