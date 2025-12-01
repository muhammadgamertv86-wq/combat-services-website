'use client';

import { motion } from 'framer-motion';

const DESTINATIONS = [
    { name: 'USA', flag: '🇺🇸' },
    { name: 'UK', flag: '🇬🇧' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Italy', flag: '🇮🇹' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Turkey', flag: '🇹🇷' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'Thailand', flag: '🇹🇭' },
];

export default function Marquee() {
    return (
        <div className="relative flex overflow-hidden bg-slate-900 py-6 border-y border-slate-800">
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-slate-900 via-transparent to-slate-900" />

            <motion.div
                className="flex gap-12 whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear",
                }}
            >
                {[...DESTINATIONS, ...DESTINATIONS, ...DESTINATIONS].map((dest, index) => (
                    <div key={index} className="flex items-center gap-3 text-slate-300">
                        <span className="text-2xl">{dest.flag}</span>
                        <span className="font-heading font-bold text-lg tracking-wide uppercase">{dest.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
