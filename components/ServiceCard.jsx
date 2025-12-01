'use client';

import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '@/lib/animations';
import { ArrowRight, GraduationCap, Globe, Briefcase, Plane, FileCheck, Building2, Palmtree } from 'lucide-react';
import Link from 'next/link';
import TiltCard from './TiltCard';

const iconMap = {
    GraduationCap,
    Plane,
    Palmtree
};

export default function ServiceCard({ service, index = 0 }) {
    const Icon = iconMap[service.icon] || GraduationCap;

    const gradients = [
        'from-purple-600 to-pink-600',
        'from-cyan-600 to-blue-600',
        'from-amber-600 to-orange-600'
    ];

    const glowColors = [
        'shadow-purple-500/50',
        'shadow-cyan-500/50',
        'shadow-amber-500/50'
    ];

    return (
        <TiltCard className="h-full">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
            >
                {/* Icon */}
                <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[index % 3]} text-white shadow-lg ${glowColors[index % 3]} group-hover:shadow-xl transition-all group-hover:scale-110 group-hover:rotate-6`}
                    >
                        <Icon size={32} />
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-bold mb-3 bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                    {service.shortDesc}
                </p>

                <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center text-sm font-medium text-gold-500 hover:text-gold-400 transition-colors"
                >
                    Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>
        </TiltCard>
    );
}
