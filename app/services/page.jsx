'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import ProcessSteps from '@/components/ProcessSteps';
import { SERVICES, PROCESS_STEPS } from '@/lib/constants';
import { CheckCircle, ArrowRight, Briefcase, Award, Users } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
    return (
        <>
            {/* Unique Services Hero */}
            <section className="min-h-[70vh] pt-32 pb-20 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-slate-900 to-background-dark">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    </div>
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 mb-8"
                        >
                            <Briefcase className="w-10 h-10 text-white" />
                        </motion.div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                            Comprehensive
                            <span className="block text-gradient-gold mt-2">Visa Services</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
                            Expert guidance for all your visa needs - from student visas to permanent immigration
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="glass-card p-6"
                            >
                                <Award className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-white mb-1">98%</div>
                                <div className="text-slate-400">Success Rate</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="glass-card p-6"
                            >
                                <Users className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-white mb-1">5000+</div>
                                <div className="text-slate-400">Happy Clients</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="glass-card p-6"
                            >
                                <Briefcase className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-white mb-1">15+</div>
                                <div className="text-slate-400">Years Experience</div>
                            </motion.div>
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                Book Free Consultation
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            Our Visa Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Tailored solutions for every visa type, backed by expertise and proven success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Service Sections */}
            {SERVICES.map((service, index) => (
                <section
                    key={service.id}
                    id={service.id}
                    className={`section-padding ${index % 2 === 0 ? 'bg-gradient-to-br from-gray-50 to-white' : 'bg-white'}`}
                >
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                {/* Content */}
                                <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                        {service.shortDesc}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex gap-4 mb-8">
                                        <div className="px-4 py-2 rounded-lg bg-green-100 text-green-700 font-semibold">
                                            {service.successRate}% Success Rate
                                        </div>
                                        <div className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-semibold">
                                            {service.processTime}
                                        </div>
                                    </div>

                                    {/* Countries */}
                                    <div className="mb-8">
                                        <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">
                                            Countries We Cover
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {service.countries.map((country) => (
                                                <span
                                                    key={country}
                                                    className="px-3 py-1 bg-primary text-white rounded-full text-sm"
                                                >
                                                    {country}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                                    <div className="bg-white rounded-2xl shadow-lg p-8">
                                        <h3 className="font-heading font-bold text-xl text-gray-900 mb-6">
                                            What We Offer
                                        </h3>
                                        <ul className="space-y-4">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-8 pt-8 border-t border-gray-200">
                                            <Link
                                                href="/contact"
                                                className="btn btn-primary w-full justify-center"
                                            >
                                                Get Started
                                                <ArrowRight size={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Process Steps */}
            <ProcessSteps steps={PROCESS_STEPS} />

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-primary-dark to-primary text-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                            Ready to Begin Your Visa Application?
                        </h2>
                        <p className="text-lg text-gray-100 mb-8">
                            Our expert consultants are ready to guide you through every step of the process
                        </p>
                        <Link href="/contact" className="btn bg-secondary hover:bg-secondary-dark btn-large">
                            Book Free Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
