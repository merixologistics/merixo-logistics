import React from 'react';
import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const GlobalReach = () => {
    // Locations to mark with coordinates [longitude, latitude]
    const locations = [
        { name: 'India', coordinates: [78.9629, 20.5937], color: '#D2691E', flag: 'https://flagcdn.com/w40/in.png' },
        { name: 'Dubai', coordinates: [55.2708, 25.2048], color: '#DAA520', flag: 'https://flagcdn.com/w40/ae.png' },
        { name: 'Singapore', coordinates: [103.8198, 1.3521], color: '#B22222', flag: 'https://flagcdn.com/w40/sg.png' },
        { name: 'Malaysia', coordinates: [101.9758, 4.2105], color: '#6B8E23', flag: 'https://flagcdn.com/w40/my.png' },
        { name: 'Sri Lanka', coordinates: [80.7718, 7.8731], color: '#FFC107', flag: 'https://flagcdn.com/w40/lk.png' }
    ];

    return (
        <section id="global-reach" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <style>
                {`
                    @keyframes dash {
                        to {
                            stroke-dashoffset: -10;
                        }
                    }
                `}
            </style>
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900">
                        Global Reach
                    </h2>
                    <p className="text-base md:text-lg text-stone-600 max-w-4xl mx-auto leading-relaxed px-4">
                        Our global presence connects clients to innovative solutions, combining international expertise with local insights.
                        With a strong network of agents across key regions, we are committed to driving success through customised strategies and solutions.
                    </p>
                </motion.div>
            </div>

            {/* World Map - Full Width */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative w-full mx-auto bg-gradient-to-br from-white to-indigo-50 shadow-2xl p-4 md:p-8 border-y border-indigo-50"
            >
                <ComposableMap
                    projectionConfig={{
                        scale: 220
                    }}
                    style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "100vh"
                    }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#D4E1F5"
                                    stroke="#FFFFFF"
                                    strokeWidth={0.8}
                                    style={{
                                        default: { outline: 'none' },
                                        hover: { outline: 'none', fill: '#3B82F6', transition: 'all 250ms' },
                                        pressed: { outline: 'none' }
                                    }}
                                />
                            ))
                        }
                    </Geographies>

                    {/* Connecting Lines from India */}
                    {locations.map((location) => {
                        if (location.name === 'India') return null;
                        return (
                            <Line
                                key={`line-${location.name}`}
                                from={[78.9629, 20.5937]}
                                to={location.coordinates}
                                stroke="#1E3A8A"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeDasharray="4 4"
                                style={{
                                    opacity: 0.6,
                                    animation: "dash 1s linear infinite"
                                }}
                            />
                        );
                    })}

                    {/* Location Markers */}
                    {locations.map((location, idx) => (
                        <Marker key={location.name} coordinates={location.coordinates}>
                            {/* Pulsing ring */}
                            <motion.circle
                                r="8"
                                fill="none"
                                stroke={location.color}
                                strokeWidth="1.5"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [0.6, 1.4, 0.6],
                                    opacity: [0.9, 0, 0.9]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    delay: idx * 0.3
                                }}
                            />

                            {/* Main marker dot */}
                            <motion.circle
                                r="4"
                                fill={location.color}
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1.2, 1] }}
                                transition={{ duration: 0.5, delay: 0.5 + (idx * 0.25) }}
                            />

                            {/* Flag on Map */}
                            <motion.image
                                href={location.flag}
                                x="-12"
                                y="-28"
                                height="16"
                                width="24"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 + (idx * 0.25) }}
                                style={{ pointerEvents: 'none' }}
                            />

                            {/* Location label */}
                            <motion.text
                                textAnchor="middle"
                                y={22}
                                style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    fill: location.color,
                                    pointerEvents: 'none'
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.7 + (idx * 0.25) }}
                            >
                                {location.name}
                            </motion.text>
                        </Marker>
                    ))}
                </ComposableMap>
            </motion.div>

            <div className="container mx-auto px-6">
                {/* Country List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm md:text-base text-stone-500 max-w-5xl mx-auto">
                        <span className="font-semibold text-stone-700">Available in:</span> India, Canada, USA, Germany, UK, Netherlands, Italy, Japan, China, UAE, Sri Lanka, Singapore, Australia, Malaysia, Indonesia, Thailand
                    </p>
                </motion.div>

                {/* Featured Locations Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-10 flex flex-wrap justify-center gap-4"
                >
                    {locations.map((loc, idx) => (
                        <motion.div
                            key={loc.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9 + (idx * 0.1) }}
                            whileHover={{ scale: 1.08, y: -4 }}
                            className="bg-white border-2 px-7 py-4 rounded-full shadow-md hover:shadow-xl transition-all cursor-pointer"
                            style={{ borderColor: loc.color }}
                        >
                            <div className="flex items-center gap-3">
                                <img 
                                    src={loc.flag} 
                                    alt={`${loc.name} flag`}
                                    className="w-6 h-4 object-cover rounded-sm shadow-sm"
                                />
                                <span className="font-bold text-stone-800 text-base">{loc.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default GlobalReach;
