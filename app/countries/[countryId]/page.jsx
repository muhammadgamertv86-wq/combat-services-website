'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Plane, CheckCircle, Clock, DollarSign, FileText, Mail, Phone } from 'lucide-react';
import { COUNTRIES_DATA } from '@/lib/countriesData';
import Image from 'next/image';

export default function CountryDetailPage() {
    const params = useParams();
    const router = useRouter();
    const country = COUNTRIES_DATA.find(c => c.id === params.countryId);

    if (!country) {
        return (
            <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-heading font-bold text-white mb-4">Country Not Found</h1>
                    <button onClick={() => router.push('/countries')} className="btn-primary">
                        Back to Countries
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <section className="container-custom mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <button
                        onClick={() => router.push('/countries')}
                        className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Countries</span>
                    </button>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-8xl">{country.flag}</span>
                        <div>
                            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-2">
                                {country.name}
                            </h1>
                            <p className="text-2xl text-gold-400 font-medium">{country.tagline}</p>
                        </div>
                    </div>

                    <p className="text-xl text-slate-300 max-w-3xl">
                        {country.description}
                    </p>
                </motion.div>
            </section>

            {/* Why This Country is Loved */}
            <section className="container-custom mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-card p-8"
                >
                    <h2 className="text-3xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                        <Globe className="w-8 h-8 text-gold-500" />
                        Why Choose {country.name}?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {country.whyLoved.map((reason, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-300">{reason}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Tourist Spots */}
            <section className="container-custom mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
                        <Plane className="w-8 h-8 text-gold-500" />
                        Must-Visit Destinations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {country.touristSpots.map((spot, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="glass-card p-6 hover:border-gold-500/50 transition-all duration-300"
                            >
                                {spot.image && (
                                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                                        <Image
                                            src={spot.image}
                                            alt={spot.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <h3 className="text-xl font-heading font-bold text-white mb-2">
                                    {spot.name}
                                </h3>
                                <p className="text-slate-400">{spot.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Visa Types */}
            <section className="container-custom mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-card p-8"
                >
                    <h2 className="text-3xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                        <FileText className="w-8 h-8 text-gold-500" />
                        Available Visa Types
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {country.visaTypes.map((visa, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-2 border-gold-500/30 rounded-lg p-4 text-center"
                            >
                                <span className="text-gold-400 font-semibold">{visa}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Visa Information */}
            <section className="container-custom mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="glass-card p-6 text-center"
                    >
                        <Clock className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                        <h3 className="text-xl font-heading font-bold text-white mb-2">Processing Time</h3>
                        <p className="text-slate-300">10-15 Business Days</p>
                        <p className="text-sm text-slate-400 mt-2">Express available</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="glass-card p-6 text-center"
                    >
                        <DollarSign className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                        <h3 className="text-xl font-heading font-bold text-white mb-2">Service Fee</h3>
                        <p className="text-slate-300">Starting from PKR 50,000</p>
                        <p className="text-sm text-slate-400 mt-2">Varies by visa type</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="glass-card p-6 text-center"
                    >
                        <CheckCircle className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                        <h3 className="text-xl font-heading font-bold text-white mb-2">Success Rate</h3>
                        <p className="text-slate-300">95%+ Approval</p>
                        <p className="text-sm text-slate-400 mt-2">With our guidance</p>
                    </motion.div>
                </div>
            </section>

            {/* Application Process */}
            <section className="container-custom mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="glass-card p-8"
                >
                    <h2 className="text-3xl font-heading font-bold text-white mb-8">Application Process</h2>
                    <div className="space-y-6">
                        {[
                            { step: 1, title: 'Initial Consultation', desc: 'Contact us to discuss your visa requirements and eligibility' },
                            { step: 2, title: 'Document Preparation', desc: 'We guide you through gathering all necessary documents' },
                            { step: 3, title: 'Application Submission', desc: 'We submit your application to the embassy/consulate' },
                            { step: 4, title: 'Follow-up & Updates', desc: 'We keep you informed throughout the process' },
                            { step: 5, title: 'Visa Collection', desc: 'Receive your approved visa and travel documents' }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-white font-bold">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-heading font-bold text-white mb-1">{item.title}</h3>
                                    <p className="text-slate-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="glass-card p-12 text-center bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-2 border-gold-500/30"
                >
                    <h2 className="text-4xl font-heading font-bold text-white mb-4">
                        Ready to Start Your Journey to {country.name}?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Let our expert team guide you through the visa application process. Contact us today for a free consultation!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => router.push('/contact')}
                            className="btn-primary text-lg px-8 py-4"
                        >
                            <Mail className="w-5 h-5" />
                            Contact Us Now
                        </button>
                        <a
                            href="tel:+923001234567"
                            className="btn-secondary text-lg px-8 py-4"
                        >
                            <Phone className="w-5 h-5" />
                            Call: +92 300 1234567
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
