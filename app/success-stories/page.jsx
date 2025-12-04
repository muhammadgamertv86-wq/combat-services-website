'use client';

import { motion } from 'framer-motion';
import TestimonialCard from '@/components/TestimonialCard';
import { TESTIMONIALS, BUSINESS_INFO } from '@/lib/constants';
import { Award, Users, Globe, TrendingUp, Trophy, Star } from 'lucide-react';
import ReviewForm from '@/components/ReviewForm';

export default function SuccessStoriesPage() {
    return (
        <>
            {/* Unique Success Stories Hero */}
            <section className="min-h-[70vh] pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-slate-900 to-background-dark">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-1/3 w-80 h-80 bg-gold-500 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-gold-600 rounded-full blur-3xl animate-pulse delay-700"></div>
                    </div>
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0, y: -50 }}
                            animate={{ scale: 1, y: 0 }}
                            transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 mb-8 relative"
                        >
                            <Trophy className="w-12 h-12 text-white" />
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center"
                            >
                                <Star className="w-5 h-5 text-white fill-white" />
                            </motion.div>
                        </motion.div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
                            Success
                            <span className="block text-gradient-gold mt-2">Stories</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
                            Real stories from real clients who achieved their visa goals with Combat International
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="glass-card p-6"
                            >
                                <TrendingUp className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                                <div className="text-3xl font-bold text-white mb-1">{BUSINESS_INFO.stats.successRate}%</div>
                                <div className="text-sm text-slate-400">Success Rate</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="glass-card p-6"
                            >
                                <Award className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                                <div className="text-3xl font-bold text-white mb-1">{(BUSINESS_INFO.stats.totalVisas / 1000).toFixed(0)}K+</div>
                                <div className="text-sm text-slate-400">Visas Approved</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 }}
                                className="glass-card p-6"
                            >
                                <Users className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                                <div className="text-3xl font-bold text-white mb-1">15K+</div>
                                <div className="text-sm text-slate-400">Happy Clients</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 }}
                                className="glass-card p-6"
                            >
                                <Globe className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                                <div className="text-3xl font-bold text-white mb-1">{BUSINESS_INFO.stats.countriesCovered}+</div>
                                <div className="text-sm text-slate-400">Countries</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-gradient-to-br from-primary-dark to-primary text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <TrendingUp size={40} className="mx-auto mb-4 text-secondary" />
                            <div className="text-4xl font-bold mb-2">{BUSINESS_INFO.stats.successRate}%</div>
                            <div className="text-sm text-gray-200">Success Rate</div>
                        </div>
                        <div>
                            <Award size={40} className="mx-auto mb-4 text-secondary" />
                            <div className="text-4xl font-bold mb-2">{BUSINESS_INFO.stats.totalVisas.toLocaleString()}+</div>
                            <div className="text-sm text-gray-200">Visas Approved</div>
                        </div>
                        <div>
                            <Users size={40} className="mx-auto mb-4 text-secondary" />
                            <div className="text-4xl font-bold mb-2">15,000+</div>
                            <div className="text-sm text-gray-200">Happy Clients</div>
                        </div>
                        <div>
                            <Globe size={40} className="mx-auto mb-4 text-secondary" />
                            <div className="text-4xl font-bold mb-2">{BUSINESS_INFO.stats.countriesCovered}+</div>
                            <div className="text-sm text-gray-200">Countries</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Testimonials */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Hear directly from clients who trusted us with their visa applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Success by Category */}
            <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            Success Across All Visa Types
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our expertise spans all visa categories
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Student Visas',
                                successRate: 99,
                                count: '8,000+',
                                description: 'Students successfully placed in top universities worldwide',
                                countries: ['USA', 'UK', 'Canada', 'Australia']
                            },
                            {
                                title: 'Immigration Visas',
                                successRate: 97,
                                count: '7,500+',
                                description: 'Families and professionals who achieved permanent residence',
                                countries: ['Canada', 'Australia', 'New Zealand']
                            },
                            {
                                title: 'Visit/Tourist Visas',
                                successRate: 98,
                                count: '4,500+',
                                description: 'Travelers who explored the world with our assistance',
                                countries: ['Schengen', 'UK', 'USA', 'Dubai']
                            }
                        ].map((category, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-2">
                                <div className="text-center mb-6">
                                    <div className="text-5xl font-bold gradient-text mb-2">{category.successRate}%</div>
                                    <div className="text-sm text-gray-600">Success Rate</div>
                                </div>

                                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 text-center">
                                    {category.title}
                                </h3>

                                <div className="text-center mb-4">
                                    <div className="text-3xl font-bold text-secondary mb-1">{category.count}</div>
                                    <p className="text-sm text-gray-600">{category.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 justify-center">
                                    {category.countries.map((country) => (
                                        <span
                                            key={country}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                                        >
                                            {country}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Review Form Section */}
            <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="container-custom">
                    <ReviewForm />
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-secondary-dark to-secondary text-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                            Ready to Write Your Success Story?
                        </h2>
                        <p className="text-lg text-gray-100 mb-8">
                            Join thousands of satisfied clients who achieved their visa goals with Combat International
                        </p>
                        <a href="/contact" className="btn bg-white text-secondary hover:bg-gray-100 btn-large">
                            Start Your Journey Today
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
