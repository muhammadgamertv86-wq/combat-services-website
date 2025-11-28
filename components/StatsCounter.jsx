'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
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
    return (
        <section className="py-20 bg-[#020617] border-y border-slate-800">
            <div className="container-custom">
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
