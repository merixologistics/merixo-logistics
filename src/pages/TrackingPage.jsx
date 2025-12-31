import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, Truck, Ship, CheckCircle, MapPin, Clock } from 'lucide-react';

const mockTrackingData = {
    'MRX123456': {
        id: 'MRX123456',
        status: 'inTransit',
        product: 'Basmati Rice - 500kg',
        origin: 'Mumbai, India',
        destination: 'Dubai, UAE',
        estimatedDelivery: 'January 5, 2026',
        currentLocation: 'Arabian Sea - En Route',
        progress: 60,
        timeline: [
            { status: 'Order Placed', date: 'Dec 20, 2025', completed: true, icon: Package },
            { status: 'Processing', date: 'Dec 21, 2025', completed: true, icon: CheckCircle },
            { status: 'Shipped', date: 'Dec 23, 2025', completed: true, icon: Ship },
            { status: 'In Transit', date: 'Dec 28, 2025', completed: true, icon: Truck },
            { status: 'Customs', date: 'Pending', completed: false, icon: CheckCircle },
            { status: 'Delivered', date: 'Pending', completed: false, icon: MapPin },
        ],
    },
    'MRX789012': {
        id: 'MRX789012',
        status: 'delivered',
        product: 'Turmeric Powder - 200kg',
        origin: 'Chennai, India',
        destination: 'Singapore',
        estimatedDelivery: 'December 25, 2025',
        currentLocation: 'Delivered',
        progress: 100,
        timeline: [
            { status: 'Order Placed', date: 'Dec 10, 2025', completed: true, icon: Package },
            { status: 'Processing', date: 'Dec 11, 2025', completed: true, icon: CheckCircle },
            { status: 'Shipped', date: 'Dec 13, 2025', completed: true, icon: Ship },
            { status: 'In Transit', date: 'Dec 18, 2025', completed: true, icon: Truck },
            { status: 'Customs', date: 'Dec 23, 2025', completed: true, icon: CheckCircle },
            { status: 'Delivered', date: 'Dec 25, 2025', completed: true, icon: MapPin },
        ],
    },
};

const TrackingPage = () => {
    const [trackingId, setTrackingId] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleTrack = (e) => {
        e.preventDefault();
        setError('');
        const data = mockTrackingData[trackingId.toUpperCase()];
        if (data) {
            setResult(data);
        } else {
            setError('Tracking ID not found. Try: MRX123456 or MRX789012');
            setResult(null);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 sm:pt-24 pb-8 sm:pb-12">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8 sm:mb-10 md:mb-12"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-3 sm:mb-4">
                        Track Your Shipment
                    </h1>
                    <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base">
                        Enter your tracking ID to see real-time updates on your order
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleTrack}
                    className="max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12"
                >
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                            <input
                                type="text"
                                value={trackingId}
                                onChange={(e) => setTrackingId(e.target.value)}
                                placeholder="Enter Tracking ID (e.g., MRX123456)"
                                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-gray-200 focus:border-spice focus:ring-2 focus:ring-spice/20 outline-none text-sm sm:text-base"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="bg-spice hover:bg-spice-red text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-colors text-sm sm:text-base"
                        >
                            Track
                        </motion.button>
                    </div>
                    {error && <p className="text-red-500 mt-2 text-center text-sm sm:text-base">{error}</p>}
                </motion.form>

                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                                <div>
                                    <p className="text-gray-500 text-xs sm:text-sm">Tracking ID</p>
                                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-stone-900">{result.id}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs sm:text-sm">Product</p>
                                    <p className="font-semibold text-stone-900 text-sm sm:text-base">{result.product}</p>
                                </div>
                                <div className="sm:col-span-2 lg:col-span-1">
                                    <p className="text-gray-500 text-xs sm:text-sm">From → To</p>
                                    <p className="font-semibold text-stone-900 text-sm sm:text-base">{result.origin} → {result.destination}</p>
                                </div>
                            </div>

                            <div className="mb-6 sm:mb-8">
                                <div className="flex justify-between text-xs sm:text-sm mb-2">
                                    <span className="text-gray-500">Progress</span>
                                    <span className="font-semibold text-spice">{result.progress}%</span>
                                </div>
                                <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${result.progress}%` }}
                                        transition={{ duration: 1, ease: 'easeOut' }}
                                        className="h-full bg-gradient-to-r from-spice to-spice-gold rounded-full"
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                <div className="flex items-center gap-3 sm:gap-4 bg-blue-50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-500 text-xs sm:text-sm">Current Location</p>
                                        <p className="font-semibold text-stone-900 text-sm sm:text-base">{result.currentLocation}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4 bg-green-50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-500 text-xs sm:text-sm">Estimated Delivery</p>
                                        <p className="font-semibold text-stone-900 text-sm sm:text-base">{result.estimatedDelivery}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8">
                            <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-4 sm:mb-6">Shipment Timeline</h3>
                            <div className="space-y-4 sm:space-y-6">
                                {result.timeline.map((step, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-3 sm:gap-4"
                                    >
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                                            step.completed ? 'bg-green-500' : 'bg-gray-200'
                                        }`}>
                                            <step.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${step.completed ? 'text-white' : 'text-gray-400'}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className={`font-semibold text-sm sm:text-base ${step.completed ? 'text-stone-900' : 'text-gray-400'}`}>
                                                {step.status}
                                            </p>
                                            <p className="text-xs sm:text-sm text-gray-500">{step.date}</p>
                                        </div>
                                        {step.completed && <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default TrackingPage;
