'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Plane, ChevronLeft, ChevronDown } from 'lucide-react';
import CountryCard from '@/components/CountryCard';
import ContinentCard from '@/components/ContinentCard';
import { getContinentsWithCounts, getCountriesByContinent } from '@/lib/countriesData';

export default function CountriesPage() {
    const [selectedContinent, setSelectedContinent] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const continents = getContinentsWithCounts();
    const INITIAL_DISPLAY_COUNT = 4; // Show 4 countries initially

    const handleContinentClick = (continentName) => {
        setSelectedContinent(selectedContinent === continentName ? null : continentName);
        setShowAll(false); // Reset to show initial countries when switching continents
    };

    const allCountries = selectedContinent ? getCountriesByContinent(selectedContinent) : [];
    const displayedCountries = showAll ? allCountries : allCountries.slice(0, INITIAL_DISPLAY_COUNT);
    const hasMoreCountries = allCountries.length > INITIAL_DISPLAY_COUNT;

    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <section className="container-custom mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Globe className="w-12 h-12 text-gold-500" />
                        <h1 className="text-5xl md:text-6xl font-heading font-bold text-white">
                            Explore <span className="text-gradient-gold">Destinations</span>
                        </h1>
                    </div>
                    <p className="text-xl text-slate-300 mb-8">
                        {selectedContinent
                            ? `Discover amazing destinations in ${selectedContinent}`
                            : 'Choose a continent to discover your dream destination'}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-gold-400">
                        <Plane className="w-5 h-5" />
                        <span className="text-sm">Your journey to success starts here</span>
                    </div>
                </motion.div>
            </section>

            {/* Back Button (when continent is selected) */}
            <AnimatePresence>
                {selectedContinent && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="container-custom mb-8"
                    >
                        <button
                            onClick={() => setSelectedContinent(null)}
                            className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors group"
                        >
                            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Back to Continents</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Continents Grid (when no continent is selected) */}
            <AnimatePresence mode="wait">
                {!selectedContinent ? (
                    <motion.section
                        key="continents"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="container-custom"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                            {continents.map((continent, index) => (
                                <motion.div
                                    key={continent.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <ContinentCard
                                        continent={continent}
                                        count={continent.count}
                                        isSelected={false}
                                        onClick={() => handleContinentClick(continent.name)}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                ) : (
                    /* Countries Grid (when continent is selected) */
                    <motion.section
                        key="countries"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="container-custom"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {displayedCountries.map((country, index) => (
                                <motion.div
                                    key={country.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <CountryCard country={country} />
                                </motion.div>
                            ))}
                        </div>

                        {/* See More Button */}
                        {hasMoreCountries && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex justify-center mt-12"
                            >
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500/10 to-gold-600/10 border-2 border-gold-500/30 rounded-full hover:border-gold-500 hover:bg-gold-500/20 transition-all duration-300"
                                >
                                    <span className="text-gold-400 font-semibold text-lg">
                                        {showAll ? 'Show Less' : `See ${allCountries.length - INITIAL_DISPLAY_COUNT} More Countries`}
                                    </span>
                                    <ChevronDown className={`w-5 h-5 text-gold-400 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
                                </button>
                            </motion.div>
                        )}
                    </motion.section>
                )}
            </AnimatePresence>

            {/* Bottom CTA */}
            <section className="container-custom mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass-card p-8 text-center"
                >
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">
                        Can't Find Your Destination?
                    </h2>
                    <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                        We provide visa services for many more countries! Contact us to discuss your specific destination and visa requirements.
                    </p>
                    <button className="btn-primary">
                        Contact Us for More Destinations
                    </button>
                </motion.div>
            </section>
        </div>
    );
}
