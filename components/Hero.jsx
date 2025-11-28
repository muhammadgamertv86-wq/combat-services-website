'use client';

import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown } from '@/lib/animations';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function Hero({
    title,
    subtitle,
    primaryCTA,
    secondaryCTA,
    backgroundImage,
    overlay = true
}) {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInDown}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8 backdrop-blur-sm">
                            <Star className="text-gold-500 fill-gold-500" size={14} />
                            <span className="text-slate-300 text-sm font-medium tracking-wide">Trusted by 20,000+ Students & Families</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[1.1] mb-8">
                            Your Gateway to <br />
                            <span className="text-gradient-gold">Global Opportunities</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="mb-12"
                    >
                        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
                            {subtitle}
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap gap-6"
                    >
                        {primaryCTA && (
                            <Link
                                href={primaryCTA.href}
                                className="btn btn-primary text-lg"
                            >
                                {primaryCTA.text}
                                <ArrowRight className="ml-2" size={20} />
                            </Link>
                        )}
                        {secondaryCTA && (
                            <Link
                                href={secondaryCTA.href}
                                className="btn btn-outline text-lg px-8"
                            >
                                {secondaryCTA.text}
                            </Link>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent" />
            </motion.div>
        </section>
    );
}
