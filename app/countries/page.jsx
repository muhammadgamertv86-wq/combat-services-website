'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Plane, ChevronLeft, ChevronDown, Search, Filter, X } from 'lucide-react';
import CountryCard from '@/components/CountryCard';
import ContinentCard from '@/components/ContinentCard';
import { getContinentsWithCounts, getCountriesByContinent, COUNTRIES_DATA } from '@/lib/countriesData';

export default function CountriesPage() {
    const [selectedContinent, setSelectedContinent] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const continents = getContinentsWithCounts();
    const INITIAL_DISPLAY_COUNT = 4; // Show 4 countries initially

    const handleContinentClick = (continentName) => {
        setSelectedContinent(selectedContinent === continentName ? null : continentName);
        setShowAll(false); // Reset to show initial countries when switching continents
        setSearchQuery(''); // Clear search when switching continents
    };

    // Filter countries based on search query and selected continent
    const filteredCountries = useMemo(() => {
        let countries = selectedContinent
            ? getCountriesByContinent(selectedContinent)
            : COUNTRIES_DATA;

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            countries = countries.filter(country =>
                country.name.toLowerCase().includes(query) ||
                country.tagline.toLowerCase().includes(query) ||
                country.description.toLowerCase().includes(query)
            );
        }

        return countries;
    }, [selectedContinent, searchQuery]);

    const displayedCountries = showAll ? filteredCountries : filteredCountries.slice(0, INITIAL_DISPLAY_COUNT);
    const hasMoreCountries = filteredCountries.length > INITIAL_DISPLAY_COUNT;

    const clearSearch = () => {
        setSearchQuery('');
    };

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

            {/* Back Button & Search (when continent is selected) */}
            <AnimatePresence>
                {selectedContinent && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="container-custom mb-8"
                    >
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                            <button
                                onClick={() => setSelectedContinent(null)}
                                className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors group"
                            >
                                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                <span className="font-medium">Back to Continents</span>
                            </button>

                            {/* Search Bar */}
                            <div className="relative w-full sm:w-96">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search countries..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-12 py-3 bg-surface-dark/50 border-2 border-gold-500/20 rounded-full text-white placeholder-slate-400 focus:border-gold-500 focus:outline-none transition-colors"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={clearSearch}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Search Results Info */}
                        {searchQuery && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-4 text-slate-300 text-sm"
                            >
                                Found {filteredCountries.length} {filteredCountries.length === 1 ? 'country' : 'countries'} matching "{searchQuery}"
                            </motion.div>
                        )}
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
                        {displayedCountries.length > 0 ? (
                            <>
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
                                {hasMoreCountries && !searchQuery && (
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
                                                {showAll ? 'Show Less' : `See ${filteredCountries.length - INITIAL_DISPLAY_COUNT} More Countries`}
                                            </span>
                                            <ChevronDown className={`w-5 h-5 text-gold-400 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
                                        </button>
                                    </motion.div>
                                )}
                            </>
                        ) : (
                            /* No Results */
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-16"
                            >
                                <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                                    No countries found
                                </h3>
                                <p className="text-slate-400 mb-6">
                                    Try adjusting your search query
                                </p>
                                <button
                                    onClick={clearSearch}
                                    className="btn-primary"
                                >
                                    Clear Search
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
