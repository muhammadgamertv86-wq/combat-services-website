'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TypewriterEffect({ words, className, cursorClassName }) {
    const [index, setIndex] = useState(0);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        words[index].slice(0, latest)
    );
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const controls = animate(count, isDeleting ? 0 : words[index].length, {
            type: 'tween',
            duration: isDeleting ? 0.8 : 1.5,
            ease: isDeleting ? 'easeInOut' : 'linear',
            onComplete: () => {
                if (isDeleting) {
                    setIndex((prev) => (prev + 1) % words.length);
                    setIsDeleting(false);
                } else {
                    setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
                }
            },
        });
        return controls.stop;
    }, [index, isDeleting, words, count]);

    return (
        <span className={className}>
            <motion.span>{displayText}</motion.span>
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                className={`inline-block w-[2px] h-[1em] bg-gold-500 ml-1 align-middle ${cursorClassName}`}
            />
        </span>
    );
}
