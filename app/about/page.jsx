'use client';

import { motion } from 'framer-motion';
import { BUSINESS_INFO, WHY_CHOOSE_US } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock, Award, Users, Globe, Target, Building2, Heart } from 'lucide-react';

export default function AboutPage() {
    return (
        <>
            {/* Unique About Hero */}
            <section className="min-h-[70vh] pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-background-dark to-slate-900">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 right-20 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-20 w-80 h-80 bg-gold-600 rounded-full blur-3xl"></div>
                    </div>
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Left: Icon & Title */}
                            <div className="flex-1 text-center md:text-left">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                    className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 mb-6"
                                >
                                    <Building2 className="w-12 h-12 text-white" />
                                </motion.div>

                                <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                                    About
                                    <span className="block text-gradient-gold mt-2">Combat International</span>
                                </h1>

                                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                    We&apos;re more than just consultants; we&apos;re your partners in success.
                                    with over 15 years of experience helping thousands achieve their international dreams
                                </p>

                                <div className="flex items-center gap-3 justify-center md:justify-start">
                                    <Heart className="w-6 h-6 text-gold-500" />
                                    <span className="text-slate-400">Serving with integrity since 2008</span>
                                </div>
                            </div>

                            {/* Right: Quick Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="glass-card p-6 text-center"
                                >
                                    <Award className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                                    <div className="text-3xl font-bold text-white">{BUSINESS_INFO.stats.successRate}%</div>
                                    <div className="text-sm text-slate-400">Success Rate</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="glass-card p-6 text-center"
                                >
                                    <Users className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                                    <div className="text-3xl font-bold text-white">{BUSINESS_INFO.stats.totalVisas.toLocaleString().slice(0, 2)}K+</div>
                                    <div className="text-sm text-slate-400">Visas Approved</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="glass-card p-6 text-center"
                                >
                                    <Globe className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                                    <div className="text-3xl font-bold text-white">{BUSINESS_INFO.stats.countriesCovered}+</div>
                                    <div className="text-sm text-slate-400">Countries</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="glass-card p-6 text-center"
                                >
                                    <Target className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                                    <div className="text-3xl font-bold text-white">{BUSINESS_INFO.stats.yearsExperience}+</div>
                                    <div className="text-sm text-slate-400">Years</div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Company Story */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Founded in Rawalpindi, Pakistan, Combat International has been a beacon of hope for thousands of individuals and families seeking to pursue their dreams abroad. With over 15 years of dedicated service in the visa consultancy industry, we have built a reputation for excellence, integrity, and unwavering commitment to our clients&apos; success.
                                </p>
                                <p>
                                    Our journey began with a simple mission: to make the complex visa application process simple, transparent, and successful for everyone. Today, with over 20,000 visas approved and a 98% success rate, we stand as one of Pakistan&apos;s most trusted visa consultancy firms.
                                </p>
                                <p>
                                    What sets us apart is our personalized approach. We understand that every client&apos;s situation is unique, and we tailor our services to meet individual needs. Our team of experienced consultants stays updated with the latest immigration policies and requirements across 50+ countries, ensuring you receive accurate and timely guidance.
                                </p>
                                <p>
                                    Whether you&apos;re a student aspiring to study at a world-class university, a professional seeking better opportunities abroad, or a family planning to reunite with loved ones, Combat International is here to turn your international dreams into reality.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-primary to-primary-light text-white p-8 rounded-2xl">
                                <Award size={40} className="mb-4" />
                                <div className="text-4xl font-bold mb-2">{BUSINESS_INFO.stats.successRate}%</div>
                                <div className="text-sm">Success Rate</div>
                            </div>
                            <div className="bg-gradient-to-br from-secondary-dark to-secondary text-white p-8 rounded-2xl">
                                <Users size={40} className="mb-4" />
                                <div className="text-4xl font-bold mb-2">{BUSINESS_INFO.stats.totalVisas.toLocaleString()}+</div>
                                <div className="text-sm">Visas Approved</div>
                            </div>
                            <div className="bg-gradient-to-br from-trust to-blue-400 text-white p-8 rounded-2xl">
                                <Globe size={40} className="mb-4" />
                                <div className="text-4xl font-bold mb-2">{BUSINESS_INFO.stats.countriesCovered}+</div>
                                <div className="text-sm">Countries</div>
                            </div>
                            <div className="bg-gradient-to-br from-green-600 to-green-400 text-white p-8 rounded-2xl">
                                <Target size={40} className="mb-4" />
                                <div className="text-4xl font-bold mb-2">{BUSINESS_INFO.stats.yearsExperience}+</div>
                                <div className="text-sm">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white text-3xl mb-6">
                                🎯
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To provide exceptional visa consultancy services that empower individuals and families to achieve their international aspirations. We are committed to delivering personalized, transparent, and ethical guidance that ensures the highest success rates in the industry.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-16 h-16 rounded-full gradient-secondary flex items-center justify-center text-white text-3xl mb-6">
                                👁️
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be Pakistan&apos;s most trusted and respected visa consultancy firm, recognized for our unwavering commitment to client success, ethical practices, and contribution to connecting people with global opportunities. We envision a future where borders are bridges, not barriers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Integrity',
                                description: 'We operate with complete honesty and transparency, providing accurate information and realistic expectations.',
                                emoji: '🤝'
                            },
                            {
                                title: 'Excellence',
                                description: 'We strive for perfection in every application, ensuring meticulous attention to detail and quality.',
                                emoji: '⭐'
                            },
                            {
                                title: 'Client-Centric',
                                description: 'Your success is our success. We put your needs first and work tirelessly to achieve your goals.',
                                emoji: '❤️'
                            },
                            {
                                title: 'Expertise',
                                description: 'Our team stays updated with the latest immigration policies and requirements worldwide.',
                                emoji: '📚'
                            },
                            {
                                title: 'Reliability',
                                description: 'You can count on us for consistent, dependable service throughout your visa journey.',
                                emoji: '✅'
                            },
                            {
                                title: 'Innovation',
                                description: 'We continuously improve our processes and services to provide the best experience.',
                                emoji: '💡'
                            }
                        ].map((value, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="text-5xl mb-4">{value.emoji}</div>
                                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Office Location */}
            <section className="section-padding bg-gradient-to-br from-primary-dark to-primary text-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                                Visit Our Office
                            </h2>
                            <p className="text-lg text-gray-100">
                                Located in the heart of Rawalpindi, we&apos;re here to serve you
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                                <h3 className="text-xl font-heading font-bold mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-secondary flex-shrink-0 mt-1" size={24} />
                                        <div>
                                            <h4 className="font-semibold mb-1">Address</h4>
                                            <p className="text-gray-100">{BUSINESS_INFO.contact.address.full}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Phone className="text-secondary flex-shrink-0 mt-1" size={24} />
                                        <div>
                                            <h4 className="font-semibold mb-1">Phone</h4>
                                            <p className="text-gray-100">{BUSINESS_INFO.contact.phone}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Mail className="text-secondary flex-shrink-0 mt-1" size={24} />
                                        <div>
                                            <h4 className="font-semibold mb-1">Email</h4>
                                            <p className="text-gray-100">{BUSINESS_INFO.contact.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                                <h3 className="text-xl font-heading font-bold mb-6">Business Hours</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-4">
                                        <Clock className="text-secondary flex-shrink-0" size={24} />
                                        <div>
                                            <p className="text-gray-100">{BUSINESS_INFO.businessHours.weekdays}</p>
                                            <p className="text-gray-100">{BUSINESS_INFO.businessHours.saturday}</p>
                                            <p className="text-gray-100">{BUSINESS_INFO.businessHours.sunday}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
