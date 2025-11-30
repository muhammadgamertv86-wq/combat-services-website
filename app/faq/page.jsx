'use client';

import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion';
import { FAQS } from '@/lib/constants';
import { HelpCircle, Search, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
    return (
        <>
            {/* Unique FAQ Hero */}
            <section className="min-h-[70vh] pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-background-dark to-slate-800">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 right-1/4 w-72 h-72 bg-gold-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gold-600 rounded-full blur-3xl"></div>
                    </div>
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0, rotate: 360 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 mb-8"
                        >
                            <HelpCircle className="w-10 h-10 text-white" />
                        </motion.div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                            Frequently Asked
                            <span className="block text-gradient-gold mt-2">Questions</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
                            Find answers to common questions about our visa services and the application process
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="glass-card p-6"
                            >
                                <Search className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-white mb-1">50+</div>
                                <div className="text-sm text-slate-400">Common Questions</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="glass-card p-6"
                            >
                                <MessageSquare className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                                <div className="text-sm text-slate-400">Support Available</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="glass-card p-6"
                            >
                                <HelpCircle className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-white mb-1">Free</div>
                                <div className="text-sm text-slate-400">Consultation</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                                Common Questions
                            </h2>
                            <p className="text-lg text-gray-600">
                                Everything you need to know about our visa services
                            </p>
                        </div>

                        <FAQAccordion faqs={FAQS} />
                    </div>
                </div>
            </section>

            {/* Still Have Questions CTA */}
            <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
                        <div className="text-5xl mb-6">❓</div>
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Can't find the answer you're looking for? Our expert consultants are here to help. Book a free consultation or send us a message.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary btn-large">
                                Book Free Consultation
                            </Link>
                            <Link href="/contact#contact-form" className="btn btn-secondary btn-large">
                                Send a Message
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                            Explore More
                        </h2>
                        <p className="text-gray-600">Learn more about our services and success stories</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Link
                            href="/services"
                            className="card text-center group hover:border-primary border-2 border-transparent transition-all"
                        >
                            <div className="text-5xl mb-4">📋</div>
                            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                Our Services
                            </h3>
                            <p className="text-gray-600">
                                Explore our comprehensive visa services
                            </p>
                        </Link>

                        <Link
                            href="/success-stories"
                            className="card text-center group hover:border-primary border-2 border-transparent transition-all"
                        >
                            <div className="text-5xl mb-4">⭐</div>
                            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                Success Stories
                            </h3>
                            <p className="text-gray-600">
                                Read testimonials from satisfied clients
                            </p>
                        </Link>

                        <Link
                            href="/about"
                            className="card text-center group hover:border-primary border-2 border-transparent transition-all"
                        >
                            <div className="text-5xl mb-4">🏢</div>
                            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                About Us
                            </h3>
                            <p className="text-gray-600">
                                Learn about our company and values
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
