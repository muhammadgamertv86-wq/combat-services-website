'use client';

import { motion } from 'framer-motion';

export default function WorldMap({ className }) {
    return (
        <div className={`relative ${className}`}>
            <svg
                viewBox="0 0 800 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full opacity-30"
            >
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: 'easeInOut' }}
                    d="M145.5 165.5C145.5 165.5 138.5 160.5 135.5 162.5C132.5 164.5 130.5 170.5 130.5 170.5L135.5 175.5H140.5L145.5 165.5Z"
                    stroke="#EAB308"
                    strokeWidth="1"
                    fill="rgba(234, 179, 8, 0.1)"
                />
                {/* Simplified World Map Paths - Abstract Representation */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 4, ease: 'easeInOut', delay: 0.5 }}
                    d="M50 100 Q 150 50 250 100 T 450 100 T 650 100"
                    stroke="#EAB308"
                    strokeWidth="0.5"
                    strokeDasharray="5 5"
                    fill="none"
                />
                <motion.circle
                    cx="140"
                    cy="170"
                    r="3"
                    fill="#EAB308"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.circle
                    cx="400"
                    cy="150"
                    r="3"
                    fill="#EAB308"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.circle
                    cx="600"
                    cy="200"
                    r="3"
                    fill="#EAB308"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />

                {/* Connecting Lines */}
                <motion.path
                    d="M140 170 Q 270 100 400 150"
                    stroke="url(#gradient-line)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                    d="M400 150 Q 500 250 600 200"
                    stroke="url(#gradient-line)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                />

                <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(234, 179, 8, 0)" />
                        <stop offset="50%" stopColor="#EAB308" />
                        <stop offset="100%" stopColor="rgba(234, 179, 8, 0)" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Floating Icons */}
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 text-2xl"
            >
                ✈️
            </motion.div>
            <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/3 right-1/3 text-2xl"
            >
                🎓
            </motion.div>
            <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 right-1/4 text-2xl"
            >
                💼
            </motion.div>
        </div>
    );
}
