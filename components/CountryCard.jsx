'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Heart, FileText } from 'lucide-react';

export default function CountryCard({ country }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Country Flag Card */}
            <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(true)}
                className="group cursor-pointer"
            >
                <div className="glass-card p-6 hover:border-gold-500/50 transition-all duration-300">
                    {/* Flag Emoji */}
                    <div className="text-8xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                        {country.flag}
                    </div>

                    {/* Country Name */}
                    <h3 className="text-xl font-heading font-bold text-white text-center mb-2">
                        {country.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-slate-400 text-center text-sm mb-4">
                        {country.tagline}
                    </p>

                    {/* More Details Button */}
                    <button className="w-full btn-primary text-sm py-2">
                        Explore Destination
                    </button>
                </div>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 p-6 flex items-center justify-between z-10">
                                <div className="flex items-center gap-4">
                                    <span className="text-6xl">{country.flag}</span>
                                    <div>
                                        <h2 className="text-3xl font-heading font-bold text-white">
                                            {country.name}
                                        </h2>
                                        <p className="text-gold-400">{country.tagline}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-slate-800 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-slate-400" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-8">
                                {/* Description */}
                                <div>
                                    <p className="text-slate-300 text-lg leading-relaxed">
                                        {country.description}
                                    </p>
                                </div>

                                {/* Why Loved */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Heart className="w-5 h-5 text-gold-500" />
                                        <h3 className="text-2xl font-heading font-bold text-white">
                                            Why Students Love {country.name}
                                        </h3>
                                    </div>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {country.whyLoved.map((reason, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="text-gold-500 mt-1">✓</span>
                                                <span className="text-slate-300">{reason}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tourist Spots */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <MapPin className="w-5 h-5 text-gold-500" />
                                        <h3 className="text-2xl font-heading font-bold text-white">
                                            Must-Visit Tourist Spots
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {country.touristSpots.map((spot, index) => (
                                            <div
                                                key={index}
                                                className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-gold-500/50 transition-colors group"
                                            >
                                                {/* Image if available */}
                                                {spot.image && (
                                                    <div className="relative h-48 overflow-hidden">
                                                        <img
                                                            src={spot.image}
                                                            alt={spot.name}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                                                    </div>
                                                )}
                                                <div className={spot.image ? 'p-4' : 'p-4'}>
                                                    <h4 className="text-lg font-semibold text-white mb-2">
                                                        {spot.name}
                                                    </h4>
                                                    <p className="text-slate-400 text-sm">
                                                        {spot.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Visa Types */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <FileText className="w-5 h-5 text-gold-500" />
                                        <h3 className="text-2xl font-heading font-bold text-white">
                                            Available Visa Types
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {country.visaTypes.map((visa, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-sm"
                                            >
                                                {visa}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/30 rounded-xl p-6 text-center">
                                    <h4 className="text-xl font-heading font-bold text-white mb-2">
                                        Ready to Start Your Journey?
                                    </h4>
                                    <p className="text-slate-300 mb-4">
                                        Contact us today for expert visa consultation for {country.name}
                                    </p>
                                    <button className="btn-primary">
                                        Get Free Consultation
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
