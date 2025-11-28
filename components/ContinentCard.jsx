'use client';

import { motion } from 'framer-motion';

export default function ContinentCard({ continent, count, isSelected, onClick }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`cursor-pointer group relative overflow-hidden rounded-2xl transition-all duration-300 ${isSelected
                    ? 'bg-gradient-to-br from-gold-500/20 to-gold-600/10 border-2 border-gold-500'
                    : 'glass-card hover:border-gold-500/50'
                }`}
        >
            <div className="p-6 text-center">
                {/* Icon */}
                <div className={`text-6xl mb-4 transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-110'}`}>
                    {continent.icon}
                </div>

                {/* Name */}
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {continent.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-3">
                    {continent.description}
                </p>

                {/* Country Count Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${isSelected
                        ? 'bg-gold-500/20 text-gold-300 border border-gold-500/50'
                        : 'bg-slate-800/50 text-slate-300 border border-slate-700'
                    }`}>
                    <span>{count}</span>
                    <span>{count === 1 ? 'Country' : 'Countries'}</span>
                </div>

                {/* Selected Indicator */}
                {isSelected && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 right-3 w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center"
                    >
                        <span className="text-white text-sm">✓</span>
                    </motion.div>
                )}
            </div>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${isSelected ? 'opacity-30' : ''
                }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent" />
            </div>
        </motion.div>
    );
}
