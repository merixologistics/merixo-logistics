import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Package, MapPin, Truck, Plane, Ship } from 'lucide-react';

const destinations = [
    { code: 'AE', name: 'UAE (Dubai)', baseRate: 2.5 },
    { code: 'SG', name: 'Singapore', baseRate: 3.0 },
    { code: 'MY', name: 'Malaysia', baseRate: 2.8 },
    { code: 'LK', name: 'Sri Lanka', baseRate: 1.8 },
    { code: 'JP', name: 'Japan', baseRate: 4.0 },
    { code: 'CN', name: 'China', baseRate: 3.5 },
    { code: 'US', name: 'United States', baseRate: 5.0 },
    { code: 'UK', name: 'United Kingdom', baseRate: 4.5 },
    { code: 'DE', name: 'Germany', baseRate: 4.2 },
    { code: 'AU', name: 'Australia', baseRate: 4.8 },
];

const shippingMethods = [
    { id: 'ocean', name: 'Ocean Freight', icon: Ship, multiplier: 1, days: '25-35' },
    { id: 'air', name: 'Air Freight', icon: Plane, multiplier: 3.5, days: '5-7' },
    { id: 'express', name: 'Express Air', icon: Truck, multiplier: 5, days: '2-3' },
];

const ShippingCalculator = () => {
    const [weight, setWeight] = useState('');
    const [destination, setDestination] = useState('');
    const [method, setMethod] = useState('ocean');
    const [result, setResult] = useState(null);

    const calculateCost = () => {
        const dest = destinations.find(d => d.code === destination);
        const ship = shippingMethods.find(m => m.id === method);
        
        if (dest && ship && weight) {
            const baseCost = parseFloat(weight) * dest.baseRate * ship.multiplier;
            const handling = 50;
            const documentation = 75;
            const total = baseCost + handling + documentation;
            
            setResult({
                baseCost: baseCost.toFixed(2),
                handling: handling.toFixed(2),
                documentation: documentation.toFixed(2),
                total: total.toFixed(2),
                days: ship.days,
                method: ship.name,
            });
        }
    };

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-10 md:mb-12"
                >
                    <Calculator className="w-10 h-10 sm:w-12 sm:h-12 text-spice mx-auto mb-3 sm:mb-4" />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-3 sm:mb-4">
                        Shipping Calculator
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base">
                        Get instant shipping estimates for your cargo
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8"
                    >
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">
                                    <Package className="w-4 h-4 inline mr-2" />
                                    Weight (kg)
                                </label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder="Enter weight"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-spice focus:ring-2 focus:ring-spice/20 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">
                                    <MapPin className="w-4 h-4 inline mr-2" />
                                    Destination
                                </label>
                                <select
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-spice focus:ring-2 focus:ring-spice/20 outline-none"
                                >
                                    <option value="">Select destination</option>
                                    {destinations.map((dest) => (
                                        <option key={dest.code} value={dest.code}>
                                            {dest.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">
                                    <Truck className="w-4 h-4 inline mr-2" />
                                    Shipping Method
                                </label>
                                <select
                                    value={method}
                                    onChange={(e) => setMethod(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-spice focus:ring-2 focus:ring-spice/20 outline-none"
                                >
                                    {shippingMethods.map((m) => (
                                        <option key={m.id} value={m.id}>
                                            {m.name} ({m.days} days)
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={calculateCost}
                            disabled={!weight || !destination}
                            className="w-full bg-spice hover:bg-spice-red text-white py-4 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Calculate Shipping Cost
                        </motion.button>

                        {result && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-8 p-6 bg-gradient-to-r from-spice/10 to-spice-gold/10 rounded-2xl"
                            >
                                <h3 className="text-xl font-bold text-stone-900 mb-4">Estimated Cost</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-stone-600">Base Shipping</span>
                                        <span className="font-medium">${result.baseCost}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-stone-600">Handling Fee</span>
                                        <span className="font-medium">${result.handling}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-stone-600">Documentation</span>
                                        <span className="font-medium">${result.documentation}</span>
                                    </div>
                                    <div className="border-t border-stone-200 pt-3 flex justify-between">
                                        <span className="font-bold text-stone-900">Total Estimate</span>
                                        <span className="font-bold text-2xl text-spice">${result.total}</span>
                                    </div>
                                    <div className="text-sm text-stone-500 text-center mt-4">
                                        Delivery: {result.days} days via {result.method}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ShippingCalculator;
