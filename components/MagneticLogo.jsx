'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticLogo() {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="relative cursor-pointer group"
        >
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-xl group-hover:border-gold-500/50 transition-colors duration-500 overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                <img src="/images/logo.png" alt="Combat International" className="w-full h-full object-cover" />
            </div>
        </motion.div>
    );
}
