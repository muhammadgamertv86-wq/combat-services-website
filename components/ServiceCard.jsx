'use client';

import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Plane, Palmtree } from 'lucide-react';
import Link from 'next/link';
import { scaleIn } from '@/lib/animations';

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
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -12, scale: 1.02 }}
            className={`bg-gradient-to-br ${gradients[index % 3]} p-[2px] rounded-2xl group cursor-pointer h-full`}
        >
            <div className="bg-slate-900 rounded-2xl p-8 h-full flex flex-col hover:bg-slate-800/90 transition-all">
                {/* Icon */}
                <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[index % 3]} text-white shadow-lg ${glowColors[index % 3]} group-hover:shadow-xl transition-all group-hover:scale-110 group-hover:rotate-6`}>
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
            </div>
        </motion.div>
    );
}
