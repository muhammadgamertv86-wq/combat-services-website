'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const StatItem = ({ value, label, suffix = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const stepTime = duration / steps;
            const target = parseInt(value.replace(/,/g, ''));
            let current = 0;
            const increment = target / steps;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2 font-heading">
                {count.toLocaleString()}{suffix}
            </div>
            <div className="text-slate-400 text-sm uppercase tracking-widest">{label}</div>
        </div>
    );
};

export default function StatsCounter() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

    return (
        <section ref={ref} className="py-20 bg-[#020617] border-y border-slate-800 relative overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.1),transparent_50%)]" />
            </motion.div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    <StatItem value="98" suffix="%" label="Success Rate" />
                    <StatItem value="20000" suffix="+" label="Visas Approved" />
                    <StatItem value="15" suffix="+" label="Years Experience" />
                    <StatItem value="50" suffix="+" label="Countries" />
                </div>
            </div>
        </section>
    );
}
