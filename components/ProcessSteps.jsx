'use client';

import { motion } from 'framer-motion';
import { MessageSquare, FileText, Send, Users, CheckCircle, Heart } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const iconMap = {
    MessageSquare,
    FileText,
    Send,
    Users,
    CheckCircle,
    Heart
};

export default function ProcessSteps({ steps }) {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            Our Simple Process
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We've streamlined the visa application process to make it as smooth and stress-free as possible
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-success transform -translate-x-1/2" />

                        {/* Steps */}
                        <div className="space-y-12">
                            {steps.map((step, index) => {
                                const Icon = iconMap[step.icon] || CheckCircle;
                                const isEven = index % 2 === 0;

                                return (
                                    <motion.div
                                        key={step.step}
                                        variants={staggerItem}
                                        className={`relative flex flex-col md:flex-row items-center gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                            }`}
                                    >
                                        {/* Content */}
                                        <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Step Number Circle */}
                                        <div className="relative z-10 flex-shrink-0">
                                            <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center text-white shadow-glow-blue">
                                                <Icon size={32} />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm shadow-glow">
                                                {step.step}
                                            </div>
                                        </div>

                                        {/* Spacer for alignment */}
                                        <div className="flex-1 hidden md:block" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
