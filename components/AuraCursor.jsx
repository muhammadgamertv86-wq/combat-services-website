'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function AuraCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring physics for the cursor movement
    const springConfig = { damping: 25, stiffness: 500, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Trail points state
    const [trailPoints, setTrailPoints] = useState([]);
    const trailLength = 20; // Number of trail segments

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Add new point to trail
            setTrailPoints(prev => {
                const newPoint = {
                    x: e.clientX,
                    y: e.clientY,
                    id: Date.now() + Math.random()
                };
                const updated = [newPoint, ...prev];
                return updated.slice(0, trailLength);
            });
        };

        const handleMouseOver = (e) => {
            // Check if hovering over interactive elements
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Trail Line */}
            <svg className="absolute inset-0 w-full h-full">
                <defs>
                    <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#eab308" stopOpacity="0" />
                        <stop offset="50%" stopColor="#eab308" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
                    </linearGradient>
                </defs>
                {trailPoints.length > 1 && (
                    <path
                        d={`M ${trailPoints.map((p, i) => `${p.x},${p.y}`).join(' L ')}`}
                        stroke="url(#trailGradient)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={0.7}
                    />
                )}
                {/* Glow effect */}
                {trailPoints.length > 1 && (
                    <path
                        d={`M ${trailPoints.map((p, i) => `${p.x},${p.y}`).join(' L ')}`}
                        stroke="#eab308"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={0.3}
                        filter="blur(4px)"
                    />
                )}
            </svg>

            {/* Main Cursor Follower */}
            <motion.div
                style={{ x: cursorXSpring, y: cursorYSpring }}
                className="fixed top-0 left-0"
            >
                <div className={`relative -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isHovering ? 'scale-150' : 'scale-100'}`}>
                    {/* Core White Dot */}
                    <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.9)] z-20 relative" />

                    {/* Gold Aura Glow */}
                    <div className="absolute inset-0 w-full h-full bg-gold-400 rounded-full opacity-60 blur-md animate-pulse z-10" />

                    {/* Outer Ring */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-gold-500/30 rounded-full transition-all duration-500 ${isHovering ? 'w-12 h-12 border-gold-400/60 bg-gold-500/5' : ''}`} />
                </div>
            </motion.div>
        </div>
    );
}
