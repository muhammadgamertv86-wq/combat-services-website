'use client';

import { motion } from 'framer-motion';
import { Globe, Plane } from 'lucide-react';
import CountryCard from '@/components/CountryCard';
import { COUNTRIES_DATA } from '@/lib/countriesData';

export default function CountriesPage() {
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
                        Discover your dream destination. Click on any country to learn about tourist attractions,
                        why students love it, and available visa options.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-gold-400">
                        <Plane className="w-5 h-5" />
                        <span className="text-sm">Your journey to success starts here</span>
                    </div>
                </motion.div>
            </section>

            {/* Countries Grid */}
            <section className="container-custom">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {COUNTRIES_DATA.map((country, index) => (
                        <motion.div
                            key={country.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <CountryCard country={country} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="container-custom mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
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
